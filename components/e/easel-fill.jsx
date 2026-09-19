import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zn2mq9eik.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zn2mq9eik"/>`,
		"fallback": "bi:easel-fill",
	});
}

export default Component;
