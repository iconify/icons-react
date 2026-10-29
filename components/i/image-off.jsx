import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh5-0nhdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh5-0nhdh"/>`,
		"fallback": "vadivam:image-off",
	});
}

export default Component;
