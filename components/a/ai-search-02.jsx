import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/monncbbwg.css';
import '../../css/r/r10bd4dnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="monncbbwg"/><path class="r10bd4dnt"/></g>`,
		"fallback": "hugeicons:ai-search-02",
	});
}

export default Component;
