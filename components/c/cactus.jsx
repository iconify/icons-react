import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyfe__5ov.css';
import '../../css/i/izee4xbjj.css';
import '../../css/t/tdt98o_hr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyfe__5ov"/><path class="izee4xbjj"/><path class="tdt98o_hr"/>`,
		"fallback": "fxemoji:cactus",
	});
}

export default Component;
