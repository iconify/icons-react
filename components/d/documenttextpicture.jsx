import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m35bpgbdz.css';
import '../../css/d/ds4ya4b-u.css';
import '../../css/u/uzaovqzzs.css';
import '../../css/z/zu1rz0b_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m35bpgbdz"/><path class="ds4ya4b-u"/><path class="uzaovqzzs"/><path class="zu1rz0b_v"/>`,
		"fallback": "fxemoji:documenttextpicture",
	});
}

export default Component;
