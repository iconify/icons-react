import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ie17f1jot.css';
import '../../css/v/vrn1zheyn.css';
import '../../css/q/qrekq4iay.css';
import '../../css/g/gwmtpwpyk.css';
import '../../css/c/cxdjidcir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ie17f1jot"/><path class="vrn1zheyn"/><path class="qrekq4iay"/><path class="gwmtpwpyk"/><path class="cxdjidcir"/></g>`,
		"fallback": "fluent-emoji-flat:3rd-place-medal",
	});
}

export default Component;
