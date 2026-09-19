import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/noooh880u.css';
import '../../css/m/mj3_1freo.css';
import '../../css/f/f4svcbcqf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="noooh880u"/><path class="mj3_1freo"/><path class="f4svcbcqf"/></g>`,
		"fallback": "fluent-emoji-flat:cloud-with-rain",
	});
}

export default Component;
