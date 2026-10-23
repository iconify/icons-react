import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv_tugbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv_tugbqo"/>`,
		"fallback": "vadivam:flag-off",
	});
}

export default Component;
