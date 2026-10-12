import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-j1u4azw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-j1u4azw"/>`,
		"fallback": "andrsrxn:currency-jpy",
	});
}

export default Component;
