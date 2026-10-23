import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h948yl_8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h948yl_8s"/>`,
		"fallback": "vadivam:galaxy",
	});
}

export default Component;
