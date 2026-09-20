import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1asp8k8y.css';
import '../../css/m/moh8knr5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1asp8k8y"/><path class="moh8knr5n"/>`,
		"fallback": "tdesign:browse-gallery-filled",
	});
}

export default Component;
