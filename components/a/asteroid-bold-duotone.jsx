import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a7dqk46ud.css';
import '../../css/t/twwi23p7w.css';
import '../../css/x/xx7uo1ygf.css';
import '../../css/s/sfpxw8b1g.css';
import '../../css/c/cvga-wbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a7dqk46ud"/><path class="twwi23p7w"/><path class="xx7uo1ygf"/><path class="sfpxw8b1g"/><path class="cvga-wbyu"/></g>`,
		"fallback": "solar:asteroid-bold-duotone",
	});
}

export default Component;
