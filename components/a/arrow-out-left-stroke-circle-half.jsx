import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr41qglch.css';
import '../../css/y/yph1tgb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr41qglch"/><path class="yph1tgb9f"/>`,
		"fallback": "boxicons:arrow-out-left-stroke-circle-half",
	});
}

export default Component;
