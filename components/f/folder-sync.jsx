import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/anwmk3bjq.css';
import '../../css/u/uc2ax5crs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="anwmk3bjq"/><path class="uc2ax5crs"/></g>`,
		"fallback": "hugeicons:folder-sync",
	});
}

export default Component;
