import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwuva2m7s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwuva2m7s"/>`,
		"fallback": "bi:car-front-fill",
	});
}

export default Component;
