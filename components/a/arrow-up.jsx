import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/peqw2v4yq.css';
import '../../css/l/lwwq5jbxt.css';
import '../../css/o/oc3xhs8uk.css';
import '../../css/s/sm00ukm5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="peqw2v4yq wm-shadow"/><path class="lwwq5jbxt wm-shadow"/><path class="oc3xhs8uk"/><path class="sm00ukm5a"/></g>`,
		"fallback": "withicons-brutal:arrow-up",
	});
}

export default Component;
