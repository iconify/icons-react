import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cwpmqo6cv.css';
import '../../css/z/zoawvx8so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cwpmqo6cv"/><path class="zoawvx8so"/></g>`,
		"fallback": "hugeicons:folder-search-01",
	});
}

export default Component;
