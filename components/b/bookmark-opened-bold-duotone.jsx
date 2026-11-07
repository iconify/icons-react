import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qezl_db6b.css';
import '../../css/n/nd3ezlbjr.css';
import '../../css/m/m-izqibkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qezl_db6b"/><path class="nd3ezlbjr"/><path class="m-izqibkb"/>`,
		"fallback": "solar:bookmark-opened-bold-duotone",
	});
}

export default Component;
