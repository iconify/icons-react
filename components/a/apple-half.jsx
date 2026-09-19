import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oz-ooxwjh.css';
import '../../css/c/cnwp86box.css';
import '../../css/i/ipkach1qn.css';
import '../../css/s/sf3de7bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oz-ooxwjh"/><path class="cnwp86box"/><path class="ipkach1qn"/><path class="sf3de7bie"/></g>`,
		"fallback": "iconoir:apple-half",
	});
}

export default Component;
