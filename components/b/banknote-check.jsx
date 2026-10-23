import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6irj2a2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6irj2a2i"/>`,
		"fallback": "vadivam:banknote-check",
	});
}

export default Component;
