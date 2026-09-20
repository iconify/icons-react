import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yhvegxbvi.css';
import '../../css/a/a4lm7bcdb.css';
import '../../css/n/n5pc76bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yhvegxbvi"/><path class="a4lm7bcdb"/><path class="n5pc76bja"/></g>`,
		"fallback": "mage:arrow-down-left-circle",
	});
}

export default Component;
