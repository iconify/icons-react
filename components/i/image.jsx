import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc75m8d8n.css';
import '../../css/r/rkf9r95ba.css';
import '../../css/g/gc3ocublh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc75m8d8n"/><path class="rkf9r95ba"/><path class="gc3ocublh"/>`,
		"fallback": "ei:image",
	});
}

export default Component;
