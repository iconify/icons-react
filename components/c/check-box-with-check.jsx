import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pve4lhbsq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pve4lhbsq"/>`,
		"fallback": "fluent-emoji-high-contrast:check-box-with-check",
	});
}

export default Component;
