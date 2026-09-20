import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_zbuvb4o.css';
import '../../css/x/xus1osbxg.css';
import '../../css/l/ln21oebys.css';
import '../../css/c/ctkr9yacj.css';
import '../../css/l/lqpz5_hxp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_zbuvb4o"/><path class="xus1osbxg"/><path class="ln21oebys"/><path class="ctkr9yacj"/><path class="lqpz5_hxp"/>`,
		"fallback": "selfhst:archiesteamfarm-light",
	});
}

export default Component;
