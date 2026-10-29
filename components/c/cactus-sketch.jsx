import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vm23nj9rp.css';
import '../../css/m/m2bzfy6-u.css';
import '../../css/g/g5qr6-bxa.css';
import '../../css/m/m0dzyqufg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vm23nj9rp wm-k"/><path class="m2bzfy6-u wm-a"/><path class="g5qr6-bxa wm-k"/><path class="m0dzyqufg wm-a"/></g>`,
		"fallback": "withicons:cactus-sketch",
	});
}

export default Component;
