import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pomc15b0m.css';
import '../../css/s/s26v07sbu.css';
import '../../css/k/kmdtw6bxj.css';
import '../../css/g/go4z5ccdt.css';
import '../../css/d/dx9i-tzjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pomc15b0m wm-k"/><path class="s26v07sbu wm-a"/><path class="kmdtw6bxj wm-shadow"/><path class="go4z5ccdt wm-k"/><path class="dx9i-tzjz wm-a"/></g>`,
		"fallback": "withicons:chevrons-left-engrave",
	});
}

export default Component;
