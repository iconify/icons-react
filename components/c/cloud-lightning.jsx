import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xagntm9ts.css';
import '../../css/r/rn9079f4b.css';
import '../../css/g/g9kozpbat.css';
import '../../css/r/rzhi-x3ia.css';
import '../../css/q/qerpnibhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xagntm9ts"/><path class="rn9079f4b"/><path class="g9kozpbat"/><path class="rzhi-x3ia"/><path class="qerpnibhs"/></g>`,
		"fallback": "withicons-retro:cloud-lightning",
	});
}

export default Component;
