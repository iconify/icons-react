import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtp3hzbje.css';
import '../../css/t/tw9pjxlco.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtp3hzbje"/><path class="tw9pjxlco"/>`,
		"fallback": "carbon:ibm-cloud-internet-services",
	});
}

export default Component;
