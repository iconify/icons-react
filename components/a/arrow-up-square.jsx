import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x9ygbfb0o.css';
import '../../css/g/gz5u9l3ok.css';
import '../../css/t/tbfod3hgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x9ygbfb0o"/><path class="gz5u9l3ok"/><rect class="tbfod3hgq"/></g>`,
		"fallback": "mage:arrow-up-square",
	});
}

export default Component;
