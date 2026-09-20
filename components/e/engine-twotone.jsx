import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-aidv.css';
import '../../css/i/iw1iew.css';
import '../../css/y/y4wbml.css';
import '../../css/y/ybdrwu.css';
import '../../css/y/ywsv3c.css';
import '../../css/y/ylapqi.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-42.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-15binr.css';
import '../../css/d/d-vq39db.css';
import '../../css/d/d-6j2qwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-aidv iw1iew"/><path class="iw1iew y4wbml ybdrwu"/><path class="iw1iew y4wbml ywsv3c"/><path class="iw1iew y4wbml ylapqi"/>`,
		"fallback": "line-md:engine-twotone",
	});
}

export default Component;
