import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esl9wpbmj.css';
import '../../css/h/haitiqbis.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esl9wpbmj"/><path class="haitiqbis"/>`,
		"fallback": "carbon:ice-accretion",
	});
}

export default Component;
