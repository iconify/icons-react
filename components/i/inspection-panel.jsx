import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rg-7g7f-y.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rg-7g7f-y"/><path class="y7zppqbne"/></g>`,
		"fallback": "hugeicons:inspection-panel",
	});
}

export default Component;
