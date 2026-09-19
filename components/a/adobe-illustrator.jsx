import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hhu7stb1d.css';
import '../../css/u/u9u7r87uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hhu7stb1d"/><path class="u9u7r87uf"/></g>`,
		"fallback": "iconoir:adobe-illustrator",
	});
}

export default Component;
