import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl_msvlzl.css';
import '../../css/q/q6zptzlwz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl_msvlzl"/><path class="q6zptzlwz"/>`,
		"fallback": "carbon:ibm-elo-automotive-compliance",
	});
}

export default Component;
