import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cgfunjbue.css';
import '../../css/f/fgug72nvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cgfunjbue"/><path class="fgug72nvh"/></g>`,
		"fallback": "hugeicons:banknote-x",
	});
}

export default Component;
