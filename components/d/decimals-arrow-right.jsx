import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o332-_lfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o332-_lfk"/>`,
		"fallback": "hugeicons:decimals-arrow-right",
	});
}

export default Component;
