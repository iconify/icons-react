import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vvt-6fbhq.css';
import '../../css/f/fqnjm0b7z.css';
import '../../css/s/sdt8tgbql.css';
import '../../css/w/w1ytikbkp.css';
import '../../css/j/jc4j63bhv.css';
import '../../css/u/uqf28_b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vvt-6fbhq wm-deco"/><path class="fqnjm0b7z wm-deco"/><path class="sdt8tgbql wm-deco"/><path class="w1ytikbkp wm-k"/><path class="jc4j63bhv wm-a"/><path class="uqf28_b7c wm-k"/></g>`,
		"fallback": "withicons:ambulance-blueprint",
	});
}

export default Component;
