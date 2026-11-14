import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jau8m-b5k.css';
import '../../css/l/lcibjue0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jau8m-b5k"/><path class="lcibjue0b"/></g>`,
		"fallback": "hugeicons:folder-library",
	});
}

export default Component;
