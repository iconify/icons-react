import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umiyufmzm.css';
import '../../css/e/ec61k5bos.css';
import '../../css/r/rf-oiacrx.css';
import '../../css/p/pqpmhlj9m.css';
import '../../css/g/g-qnrhopb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="umiyufmzm"/><path clip-rule="evenodd" class="ec61k5bos"/><path class="rf-oiacrx"/><path class="pqpmhlj9m"/><path class="g-qnrhopb"/></g>`,
		"fallback": "streamline-color:bug-virus-browser",
	});
}

export default Component;
