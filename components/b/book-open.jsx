import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tmjg18bho.css';
import '../../css/t/trpixhn4n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tmjg18bho"/><path class="trpixhn4n"/></g>`,
		"fallback": "charm:book-open",
	});
}

export default Component;
