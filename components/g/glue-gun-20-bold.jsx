import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6h9w5hey.css';
import '../../css/s/sn5c15bsv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6h9w5hey"/><path class="sn5c15bsv"/>`,
		"fallback": "energy-icons:glue-gun-20-bold",
	});
}

export default Component;
