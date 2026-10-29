import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7wvkvbdy.css';
import '../../css/t/t2m6v4q5c.css';
import '../../css/l/l1wb7tkmb.css';
import '../../css/c/cv91blbnn.css';
import '../../css/d/d1dibebka.css';
import '../../css/n/nd0st7bxi.css';
import '../../css/r/rv7hd0bpo.css';
import '../../css/v/vcr1-rqym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7wvkvbdy wm-shadow"/><path class="t2m6v4q5c wm-k"/><path class="l1wb7tkmb wm-k"/><path class="cv91blbnn wm-k"/><path class="d1dibebka wm-k"/><path class="nd0st7bxi wm-k"/><path class="rv7hd0bpo wm-shine"/><path class="vcr1-rqym wm-a"/>`,
		"fallback": "withicons-pastel:badge-percent",
	});
}

export default Component;
