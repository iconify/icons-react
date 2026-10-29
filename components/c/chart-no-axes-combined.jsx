import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-5-68xlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-5-68xlv"/>`,
		"fallback": "vadivam:chart-no-axes-combined",
	});
}

export default Component;
