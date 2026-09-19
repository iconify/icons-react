import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjasv6b3c.css';
import '../../css/z/zi20bubcs.css';
import '../../css/k/kr7hg3bsa.css';
import '../../css/q/qhnuu9bfw.css';
import '../../css/a/a2eitc6js.css';
import '../../css/r/r7glabbjv.css';
import '../../css/d/d4v69ibnk.css';
import '../../css/f/f8uc5vb8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hjasv6b3c"/><path class="zi20bubcs"/><path class="kr7hg3bsa"/><path class="qhnuu9bfw"/><path class="a2eitc6js"/><path class="r7glabbjv"/><path class="d4v69ibnk"/><path class="f8uc5vb8g"/></g>`,
		"fallback": "fluent-emoji-flat:horizontal-traffic-light",
	});
}

export default Component;
