import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8ep8xb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8ep8xb3d"/>`,
		"fallback": "vadivam:braces",
	});
}

export default Component;
