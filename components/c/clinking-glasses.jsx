import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qhfs15bud.css';
import '../../css/m/mbmql2bzm.css';
import '../../css/r/r9rxje2yi.css';
import '../../css/m/mn-s01b9h.css';
import '../../css/v/vhoyfbciv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qhfs15bud"/><path class="mbmql2bzm"/><path class="r9rxje2yi"/><path class="mn-s01b9h"/><path class="vhoyfbciv"/></g>`,
		"fallback": "fluent-emoji-flat:clinking-glasses",
	});
}

export default Component;
