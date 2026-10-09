import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io2eiemnh.css';
import '../../css/u/uxhgw2beg.css';
import '../../css/w/weytrjnhh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io2eiemnh"/><path class="uxhgw2beg"/><path class="weytrjnhh"/>`,
		"fallback": "energy-icons:export-limit-20",
	});
}

export default Component;
