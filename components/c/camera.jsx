import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icwdcg1df.css';

const viewBox = {"width":1920,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icwdcg1df"/>`,
		"fallback": "fa:camera",
	});
}

export default Component;
