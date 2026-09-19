import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3ll3kbae.css';
import '../../css/i/iyzk2db_h.css';
import '../../css/i/iwengkb2h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3ll3kbae"/><path class="iyzk2db_h"/><path class="iwengkb2h"/>`,
		"fallback": "devicon:debian-wordmark",
	});
}

export default Component;
