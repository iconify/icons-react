import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix49lsb0a.css';
import '../../css/n/nmakc7bpn.css';
import '../../css/f/f6as21l_m.css';
import '../../css/i/i3atnibub.css';
import '../../css/g/gl1-mrb0b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ix49lsb0a"/><path class="nmakc7bpn"/><path class="f6as21l_m"/><path class="i3atnibub"/><path class="gl1-mrb0b"/></g>`,
		"fallback": "fluent-emoji-flat:eyes",
	});
}

export default Component;
