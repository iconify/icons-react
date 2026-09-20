import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqk1152xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="tqk1152xh"/>`,
		"fallback": "wordpress:align-justify",
	});
}

export default Component;
