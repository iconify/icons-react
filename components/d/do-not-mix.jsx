import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edt2f197a.css';
import '../../css/o/ofm7oebfv.css';
import '../../css/f/f14lao85h.css';
import '../../css/w/wi71tfpgo.css';
import '../../css/o/o0xw4kbra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edt2f197a"/><path class="ofm7oebfv"/><path class="f14lao85h"/><path class="wi71tfpgo"/><path class="o0xw4kbra"/>`,
		"fallback": "flat-color-icons:do-not-mix",
	});
}

export default Component;
