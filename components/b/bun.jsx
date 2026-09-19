import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osbm_yzxy.css';
import '../../css/a/ay6sfyn6f.css';
import '../../css/p/pwf6_mkij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osbm_yzxy"/><path class="ay6sfyn6f"/><path class="pwf6_mkij"/>`,
		"fallback": "bxl:bun",
	});
}

export default Component;
