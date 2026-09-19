import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alqc54g4m.css';
import '../../css/r/rn2kcz5al.css';
import '../../css/e/eo3krlb4g.css';
import '../../css/g/gnea6-e5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="alqc54g4m"/><circle class="rn2kcz5al"/><path class="eo3krlb4g"/><path class="gnea6-e5v"/>`,
		"fallback": "bx:bx-joystick-alt",
	});
}

export default Component;
