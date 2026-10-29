import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvh342beq.css';
import '../../css/u/uyyrpzz_g.css';
import '../../css/g/geu9tcfwm.css';
import '../../css/y/ymmj381ie.css';
import '../../css/i/idl3lt53u.css';
import '../../css/o/o6vr7fo6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvh342beq wm-shadow"/><path class="uyyrpzz_g wm-k"/><path class="geu9tcfwm wm-k"/><path class="wm-k ymmj381ie"/><path class="idl3lt53u wm-k"/><path class="o6vr7fo6w wm-shine"/>`,
		"fallback": "withicons-pastel:at-sign",
	});
}

export default Component;
