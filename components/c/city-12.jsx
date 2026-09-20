import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rwmoieclp.css';
import '../../css/n/nwmn0mbtz.css';
import '../../css/r/rsyfj2bja.css';
import '../../css/r/rmh_gdpam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rwmoieclp"/><path class="nwmn0mbtz"/><path class="rsyfj2bja"/><path class="rmh_gdpam"/></g>`,
		"fallback": "tdesign:city-12",
	});
}

export default Component;
