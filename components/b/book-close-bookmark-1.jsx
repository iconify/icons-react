import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-sjb4b8r.css';
import '../../css/h/h4k3stb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-sjb4b8r"/><path class="h4k3stb6g"/></g>`,
		"fallback": "streamline-ultimate:book-close-bookmark-1",
	});
}

export default Component;
