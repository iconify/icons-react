import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx6kogx4i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx6kogx4i"/>`,
		"fallback": "gravity-ui:broom-motion-fill",
	});
}

export default Component;
