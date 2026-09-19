import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fqlq82b9v.css';
import '../../css/z/z7uojzuaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fqlq82b9v"/><path class="z7uojzuaw"/></g>`,
		"fallback": "hugeicons:file-search-corner",
	});
}

export default Component;
