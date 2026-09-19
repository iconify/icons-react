import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufa-0g21i.css';
import '../../css/a/a_-4bw6-y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufa-0g21i"/><path class="a_-4bw6-y"/>`,
		"fallback": "carbon:ibm-cloud-pak-netezza",
	});
}

export default Component;
