import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smmymf_ne.css';

const viewBox = {"width":344,"height":392};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smmymf_ne"/>`,
		"fallback": "zmdi:format-color-reset",
	});
}

export default Component;
