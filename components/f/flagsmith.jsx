import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb-dc4b3r.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w-ijcgbiz.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/e/eru3sqbhz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<clipPath id="SVGObTrSd1t"><path class="gb-dc4b3r"/></clipPath><g class="ft5dv1b6b"><rect class="w-ijcgbiz"/><g clip-path="url(#SVGObTrSd1t)" class="n1mjunbsu"><path class="eru3sqbhz"/></g></g>`,
		"fallback": "thesvg-color:flagsmith",
	});
}

export default Component;
