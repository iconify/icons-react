import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g75be7uzv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g75be7uzv"/>`,
		"fallback": "carbon:ibm-engineering-systems-design-rhapsody-sn1",
	});
}

export default Component;
