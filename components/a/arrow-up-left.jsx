import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bio0il38c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bio0il38c"/>`,
		"fallback": "vadivam:arrow-up-left",
	});
}

export default Component;
