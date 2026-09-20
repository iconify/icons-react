import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wso6qqzcb.css';
import '../../css/u/u9-cdnbkn.css';
import '../../css/e/e3fjlzrkz.css';
import '../../css/r/r3vrbgbgv.css';
import '../../css/e/e7nts4gnf.css';
import '../../css/y/ylcvhwbrw.css';
import '../../css/q/qxlid6bxk.css';
import '../../css/r/ro9rytf_i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wso6qqzcb"/><path class="u9-cdnbkn"/><path class="e3fjlzrkz"/><path class="r3vrbgbgv"/><circle class="e7nts4gnf"/><circle class="ylcvhwbrw"/><path class="qxlid6bxk"/><path class="ro9rytf_i"/>`,
		"fallback": "openmoji:chicken",
	});
}

export default Component;
