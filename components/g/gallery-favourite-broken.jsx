import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1xuy0btj.css';
import '../../css/s/sixfdvbze.css';
import '../../css/i/iucnxxyud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f1xuy0btj"/><path class="sixfdvbze"/><path class="iucnxxyud"/></g>`,
		"fallback": "solar:gallery-favourite-broken",
	});
}

export default Component;
