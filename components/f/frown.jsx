import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/et0aljbre.css';
import '../../css/j/jd6qz6uvx.css';
import '../../css/e/evn8-tb-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="et0aljbre"/><path class="jd6qz6uvx"/><path class="evn8-tb-z"/></g>`,
		"fallback": "matita:frown",
	});
}

export default Component;
