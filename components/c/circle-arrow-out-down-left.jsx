import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtlns_fvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtlns_fvj"/>`,
		"fallback": "vadivam:circle-arrow-out-down-left",
	});
}

export default Component;
