import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d714-ebbd.css';
import '../../css/i/iuo5trbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d714-ebbd"/><path class="iuo5trbbu"/></g>`,
		"fallback": "hugeicons:course",
	});
}

export default Component;
