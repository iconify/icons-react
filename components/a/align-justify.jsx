import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh4rqfpek.css';
import '../../css/w/wx4dzibso.css';
import '../../css/k/kz669vh8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh4rqfpek"/><path class="wx4dzibso"/><path class="kz669vh8u"/>`,
		"fallback": "withicons-bauhaus:align-justify",
	});
}

export default Component;
