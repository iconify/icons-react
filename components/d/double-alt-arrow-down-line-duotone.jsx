import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zen1fdcpk.css';
import '../../css/n/nhx5qezis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zen1fdcpk"/><path class="nhx5qezis"/></g>`,
		"fallback": "solar:double-alt-arrow-down-line-duotone",
	});
}

export default Component;
