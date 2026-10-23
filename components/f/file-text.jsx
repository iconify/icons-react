import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2wxvii_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2wxvii_b"/>`,
		"fallback": "vadivam:file-text",
	});
}

export default Component;
