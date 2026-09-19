import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_78o9bzj.css';
import '../../css/p/pxi3puayf.css';
import '../../css/t/t8vw0vfjk.css';
import '../../css/m/mpg06dbtz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v_78o9bzj"/><path clip-rule="evenodd" class="pxi3puayf"/><path clip-rule="evenodd" class="t8vw0vfjk"/><path class="mpg06dbtz"/></g>`,
		"fallback": "healthicons:accident-and-emergency-outline",
	});
}

export default Component;
