import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvq0_2bsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvq0_2bsz"/>`,
		"fallback": "fa-solid:cog",
	});
}

export default Component;
