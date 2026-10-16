import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6_s1zkbf.css';
import '../../css/j/jgob_eb-m.css';
import '../../css/o/oonsc9nwe.css';
import '../../css/d/dijq8qbns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6_s1zkbf"/><path class="jgob_eb-m"/><path class="oonsc9nwe"/><path class="dijq8qbns"/>`,
		"fallback": "energy-icons:hazard-gas-20",
	});
}

export default Component;
