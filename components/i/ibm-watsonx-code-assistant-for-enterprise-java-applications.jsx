import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6i9drdtn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6i9drdtn"/>`,
		"fallback": "carbon:ibm-watsonx-code-assistant-for-enterprise-java-applications",
	});
}

export default Component;
