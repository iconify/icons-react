import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjgqdudox.css';
import '../../css/c/c-ji3vbvx.css';
import '../../css/g/gk48d415h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjgqdudox"/><path class="c-ji3vbvx"/><path class="gk48d415h"/>`,
		"fallback": "energy-icons:factory-48-bold",
	});
}

export default Component;
