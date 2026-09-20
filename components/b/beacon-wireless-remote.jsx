import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rmr4eachp.css';
import '../../css/n/n5p9m7b4g.css';
import '../../css/j/jbvm5nb7b.css';
import '../../css/y/y__psy2rv.css';
import '../../css/c/c6pwwrb-g.css';
import '../../css/z/zrsh6-bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rmr4eachp"/><path class="n5p9m7b4g"/><path class="jbvm5nb7b"/><path class="y__psy2rv"/><path class="c6pwwrb-g"/><path class="zrsh6-bkp"/></g>`,
		"fallback": "streamline-ultimate-color:beacon-wireless-remote",
	});
}

export default Component;
