import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y7zppqbne.css';
import '../../css/z/zjb0qqbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y7zppqbne"/><path class="zjb0qqbvc"/></g>`,
		"fallback": "hugeicons:download-square-02",
	});
}

export default Component;
