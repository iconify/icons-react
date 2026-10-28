import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg6bfm_0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg6bfm_0j"/>`,
		"fallback": "andrsrxn:currency-hnl",
	});
}

export default Component;
