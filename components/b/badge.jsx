import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uucv2_foa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uucv2_foa"/>`,
		"fallback": "vadivam:badge",
	});
}

export default Component;
