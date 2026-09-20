import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7lvi-bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7lvi-bqc"/>`,
		"fallback": "uil:gift",
	});
}

export default Component;
