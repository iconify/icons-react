import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tl2ij-fui.css';
import '../../css/f/f8am6qb0g.css';
import '../../css/z/zjwu41b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tl2ij-fui"/><path class="f8am6qb0g"/><path class="zjwu41b8q"/></g>`,
		"fallback": "streamline-sharp:ai-science-spark",
	});
}

export default Component;
