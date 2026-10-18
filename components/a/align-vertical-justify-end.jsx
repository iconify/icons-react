import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bejip4b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bejip4b3p"/>`,
		"fallback": "vadivam:align-vertical-justify-end",
	});
}

export default Component;
