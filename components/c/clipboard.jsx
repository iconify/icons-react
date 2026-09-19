import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-wbzub2q.css';
import '../../css/a/a2fk3zbuq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r-wbzub2q"/><path class="a2fk3zbuq"/></g>`,
		"fallback": "at-icons:clipboard",
	});
}

export default Component;
