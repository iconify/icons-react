import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/w/w0ylnq.css';
import '../../css/i/i1bv_o.css';
import '../../css/y/y4wbml.css';
import '../../css/h/hy9wxw.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew w0ylnq"/><path class="i1bv_o iw1iew y4wbml"/><path class="hy9wxw iw1iew y4wbml"/>`,
		"fallback": "line-md:filter-plus-filled",
	});
}

export default Component;
