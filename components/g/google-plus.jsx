import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsucddc_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsucddc_o"/>`,
		"fallback": "fontisto:google-plus",
	});
}

export default Component;
