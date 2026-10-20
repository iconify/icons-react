import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcmrqu1vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcmrqu1vq"/>`,
		"fallback": "vadivam:circle-minus",
	});
}

export default Component;
