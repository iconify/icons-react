import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k6kugdc8h.css';
import '../../css/h/hlpduac0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k6kugdc8h"/><path class="hlpduac0z"/></g>`,
		"fallback": "iconoir:bug",
	});
}

export default Component;
