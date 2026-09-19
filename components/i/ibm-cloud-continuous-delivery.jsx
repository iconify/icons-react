import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw038zbvw.css';
import '../../css/n/nr8b-db0z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw038zbvw"/><path class="nr8b-db0z"/>`,
		"fallback": "carbon:ibm-cloud-continuous-delivery",
	});
}

export default Component;
