import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr9p5hlao.css';
import '../../css/e/eir-cobpl.css';
import '../../css/v/v-ax0bbpe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rr9p5hlao"/><path class="eir-cobpl"/><path class="v-ax0bbpe"/></g>`,
		"fallback": "icon-park:germs",
	});
}

export default Component;
