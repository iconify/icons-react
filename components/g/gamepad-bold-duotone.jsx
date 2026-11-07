import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edd2ocbnm.css';
import '../../css/s/skhyrda9q.css';
import '../../css/m/m288z5bff.css';
import '../../css/n/n891pacwj.css';
import '../../css/f/f5gc7y0qh.css';
import '../../css/s/sch6mw2he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edd2ocbnm"/><path class="skhyrda9q"/><path class="m288z5bff"/><path class="n891pacwj"/><path class="f5gc7y0qh"/><path class="sch6mw2he"/>`,
		"fallback": "solar:gamepad-bold-duotone",
	});
}

export default Component;
