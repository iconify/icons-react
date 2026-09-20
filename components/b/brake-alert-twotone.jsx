import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/o/ot72sp.css';
import '../../css/g/g_t0ty.css';
import '../../css/y/y4wbml.css';
import '../../css/v/v562ka.css';
import '../../css/n/nj8tyr.css';
import '../../css/e/ewxcsc.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew ot72sp"/><path class="g_t0ty iw1iew y4wbml"/><path class="iw1iew v562ka y4wbml"/><path class="iw1iew nj8tyr y4wbml"/><path class="ewxcsc iw1iew y4wbml"/>`,
		"fallback": "line-md:brake-alert-twotone",
	});
}

export default Component;
