import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2e05bcja.css';
import '../../css/j/juj0211vf.css';
import '../../css/z/zpr4ze31r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2e05bcja"/><path class="juj0211vf"/><path class="zpr4ze31r"/>`,
		"fallback": "selfhst:colota-light",
	});
}

export default Component;
