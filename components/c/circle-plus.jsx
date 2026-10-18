import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-_fu4bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-_fu4bta"/>`,
		"fallback": "vadivam:circle-plus",
	});
}

export default Component;
