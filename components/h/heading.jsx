import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ety1tgnuk.css';
import '../../css/f/f4ilq6zpr.css';
import '../../css/u/uksvl2jdg.css';
import '../../css/k/keamv5b7w.css';
import '../../css/o/ox3l4obif.css';
import '../../css/q/qywb6ab6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ety1tgnuk wm-shadow"/><path class="f4ilq6zpr wm-k"/><path class="uksvl2jdg wm-k"/><path class="keamv5b7w wm-k"/><path class="ox3l4obif wm-k"/><path class="qywb6ab6b wm-shine"/>`,
		"fallback": "withicons-pastel:heading",
	});
}

export default Component;
