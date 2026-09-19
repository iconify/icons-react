import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lrd5pqbzp.css';
import '../../css/r/rl6b42m5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lrd5pqbzp"/><path class="rl6b42m5r"/></g>`,
		"fallback": "iconoir:database-export",
	});
}

export default Component;
