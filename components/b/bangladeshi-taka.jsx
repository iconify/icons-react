import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpdu8fdhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpdu8fdhc"/>`,
		"fallback": "vadivam:bangladeshi-taka",
	});
}

export default Component;
