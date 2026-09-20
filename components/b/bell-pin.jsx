import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lmlrhtz8r.css';
import '../../css/w/wptudbbot.css';
import '../../css/k/kl2jsebar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lmlrhtz8r"/><path class="wptudbbot"/><circle class="kl2jsebar"/></g>`,
		"fallback": "lets-icons:bell-pin",
	});
}

export default Component;
