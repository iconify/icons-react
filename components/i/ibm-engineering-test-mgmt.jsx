import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjlrjeixl.css';
import '../../css/m/m1mt6od4j.css';
import '../../css/p/p_qb8obhm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjlrjeixl"/><path class="m1mt6od4j"/><path class="p_qb8obhm"/>`,
		"fallback": "carbon:ibm-engineering-test-mgmt",
	});
}

export default Component;
