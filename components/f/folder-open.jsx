import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iyxjhv93x.css';
import '../../css/f/f3nz4rb0d.css';
import '../../css/j/jdp_3zmek.css';
import '../../css/o/og5jizutc.css';
import '../../css/z/zm7o4ipwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="iyxjhv93x wm-shadow"/><path class="f3nz4rb0d wm-shadow"/><path class="jdp_3zmek"/><path class="og5jizutc"/><path class="zm7o4ipwe"/></g>`,
		"fallback": "withicons-brutal:folder-open",
	});
}

export default Component;
