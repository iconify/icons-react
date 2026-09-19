import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zryp4sb9s.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zryp4sb9s"/>`,
		"fallback": "fa6-solid:building-circle-xmark",
	});
}

export default Component;
