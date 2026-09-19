import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ybj9neizb.css';
import '../../css/a/aym3u_brg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ybj9neizb"/><path class="aym3u_brg"/></g>`,
		"fallback": "hugeicons:files-01",
	});
}

export default Component;
