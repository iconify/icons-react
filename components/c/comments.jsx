import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmcg5w62t.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmcg5w62t"/>`,
		"fallback": "fa6-regular:comments",
	});
}

export default Component;
