import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jf70n4edq.css';
import '../../css/x/xaqatc1-u.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jf70n4edq"/><path class="xaqatc1-u"/><rect class="tbfod3hgq"/></g>`,
		"fallback": "mage:arrow-left-square",
	});
}

export default Component;
