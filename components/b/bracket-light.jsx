import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am0o2qbnj.css';
import '../../css/h/hx6oh69ek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am0o2qbnj"/><path class="hx6oh69ek"/>`,
		"fallback": "selfhst:bracket-light",
	});
}

export default Component;
