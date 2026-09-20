import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9tsge_gb.css';
import '../../css/h/h6ao34een.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9tsge_gb"/><path class="h6ao34een"/>`,
		"fallback": "selfhst:esphome",
	});
}

export default Component;
