import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/k/kb3-_t.css';
import '../../css/y/y4wbml.css';
import '../../css/y/ywbs5z.css';
import '../../css/r/rakmch.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-10.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew kb3-_t"/><path class="iw1iew y4wbml ywbs5z"/><path class="iw1iew rakmch y4wbml"/>`,
		"fallback": "line-md:coffee-twotone",
	});
}

export default Component;
