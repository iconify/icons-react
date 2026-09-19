import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n2bb4gasf.css';
import '../../css/s/s5elxcb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n2bb4gasf"/><path class="s5elxcb1s"/></g>`,
		"fallback": "hugeicons:file-cog",
	});
}

export default Component;
