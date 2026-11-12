import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezqsr36tr.css';
import '../../css/n/n2nlvdnrj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ezqsr36tr"/><path class="n2nlvdnrj"/>`,
		"fallback": "selfhst:ghstats",
	});
}

export default Component;
