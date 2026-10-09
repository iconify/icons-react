import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo3chwbhv.css';
import '../../css/c/co_00rbvb.css';
import '../../css/u/uwt2fqejw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo3chwbhv"/><path class="co_00rbvb"/><path class="uwt2fqejw"/>`,
		"fallback": "energy-icons:charging-cable-20-bold",
	});
}

export default Component;
