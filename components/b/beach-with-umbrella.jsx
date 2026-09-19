import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kpp4nackf.css';
import '../../css/m/m57_qac1g.css';
import '../../css/d/dpn7wguwv.css';
import '../../css/q/qh6-sclag.css';
import '../../css/y/ykom1db1q.css';
import '../../css/f/fz53uc9vv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kpp4nackf"/><path class="m57_qac1g"/><path class="dpn7wguwv"/><path class="qh6-sclag"/><path class="ykom1db1q"/><path class="fz53uc9vv"/></g>`,
		"fallback": "fluent-emoji-flat:beach-with-umbrella",
	});
}

export default Component;
