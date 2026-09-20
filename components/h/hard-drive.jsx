import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um8k7-jvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um8k7-jvx"/>`,
		"fallback": "vadivam:hard-drive",
	});
}

export default Component;
