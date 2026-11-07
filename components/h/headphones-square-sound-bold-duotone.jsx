import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v69cw1nsu.css';
import '../../css/q/qe32f93df.css';
import '../../css/s/sz007hbki.css';
import '../../css/c/cnm11g43b.css';
import '../../css/r/r431kzbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v69cw1nsu"/><g clip-rule="evenodd" class="qe32f93df"><path class="sz007hbki"/><path class="cnm11g43b"/><path class="r431kzbaf"/></g>`,
		"fallback": "solar:headphones-square-sound-bold-duotone",
	});
}

export default Component;
