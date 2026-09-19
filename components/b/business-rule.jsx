import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfwtfdz8c.css';
import '../../css/r/rzh_o5duh.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfwtfdz8c"/><path class="rzh_o5duh"/>`,
		"fallback": "bpmn:business-rule",
	});
}

export default Component;
