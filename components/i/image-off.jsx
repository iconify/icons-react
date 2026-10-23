import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol8t6obxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol8t6obxo"/>`,
		"fallback": "vadivam:image-off",
	});
}

export default Component;
