import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u-s2apb4c.css';
import '../../css/j/jzczbcygq.css';
import '../../css/r/rmfk9oeoh.css';
import '../../css/r/rql3qpe4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u-s2apb4c wm-shadow"/><path class="jzczbcygq wm-shadow"/><path class="rmfk9oeoh"/><path class="rql3qpe4z"/></g>`,
		"fallback": "withicons-brutal:cctv",
	});
}

export default Component;
