import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tas75n0ft.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tas75n0ft"/>`,
		"fallback": "cib:azure-pipelines",
	});
}

export default Component;
