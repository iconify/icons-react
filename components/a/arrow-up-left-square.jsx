import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bhb1ybbvb.css';
import '../../css/l/l5iage8ap.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bhb1ybbvb"/><path class="l5iage8ap"/><rect class="tbfod3hgq"/></g>`,
		"fallback": "mage:arrow-up-left-square",
	});
}

export default Component;
