import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/s/sd8ohw.css';
import '../../css/y/ydovum.css';
import '../../css/e/es_8rf.css';
import '../../css/e/eu4xtd.css';
import '../../css/y/y4wbml.css';
import '../../css/l/lk_2jb.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/d/d-3crpcp.css';
import '../../css/d/d-70g21a.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew sd8ohw ydovum"/><path class="es_8rf ydovum"/><path class="eu4xtd iw1iew y4wbml"/><path class="iw1iew lk_2jb y4wbml"/>`,
		"fallback": "line-md:cellphone-arrow-up-twotone",
	});
}

export default Component;
