import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk9d-zsqc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk9d-zsqc"/>`,
		"fallback": "cib:ibm",
	});
}

export default Component;
