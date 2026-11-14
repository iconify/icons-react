import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbf0-ebdh.css';
import '../../css/l/lxhtjibse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dbf0-ebdh"/><path class="lxhtjibse"/></g>`,
		"fallback": "hugeicons:folder-search",
	});
}

export default Component;
