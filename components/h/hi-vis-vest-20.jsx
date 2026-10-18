import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq77azrkm.css';
import '../../css/o/oykk7m8it.css';
import '../../css/q/qkfd58nsa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq77azrkm"/><path class="oykk7m8it"/><path class="qkfd58nsa"/>`,
		"fallback": "energy-icons:hi-vis-vest-20",
	});
}

export default Component;
