import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtk-ex65l.css';
import '../../css/l/l9d8_1irv.css';
import '../../css/f/fd9rt0b5x.css';
import '../../css/r/rkteku1vi.css';
import '../../css/q/q7-l6mb8a.css';
import '../../css/w/wtwrn4dsh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtk-ex65l"/><path class="l9d8_1irv"/><path class="fd9rt0b5x"/><path class="rkteku1vi"/><path class="q7-l6mb8a"/><path class="wtwrn4dsh"/></g>`,
		"fallback": "streamline-kameleon-color:chicken",
	});
}

export default Component;
