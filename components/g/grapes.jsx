import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__c8zpwz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a__c8zpwz"/>`,
		"fallback": "dinkie-icons:grapes",
	});
}

export default Component;
