import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1b7dlb_x.css';
import '../../css/p/p586cjbdt.css';
import '../../css/o/owhr5ut9l.css';
import '../../css/j/jhszfhpco.css';
import '../../css/p/pl5pmnbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1b7dlb_x"/><path class="p586cjbdt"/><path class="owhr5ut9l"/><path class="jhszfhpco"/><path class="pl5pmnbeg"/>`,
		"fallback": "gcp:datashare",
	});
}

export default Component;
