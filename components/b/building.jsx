import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/pmshesa4n.css';
import '../../css/x/xbl4w7b0q.css';
import '../../css/d/dya65y26c.css';
import '../../css/c/ccjiccb7m.css';
import '../../css/y/ywsdwrb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="pmshesa4n wm-shadow"/><path class="wm-shadow xbl4w7b0q"/><path class="dya65y26c"/><path class="ccjiccb7m"/><path class="ywsdwrb7g"/></g>`,
		"fallback": "withicons-brutal:building",
	});
}

export default Component;
