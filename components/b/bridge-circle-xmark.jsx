import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv3slsasd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv3slsasd"/>`,
		"fallback": "fa7-solid:bridge-circle-xmark",
	});
}

export default Component;
