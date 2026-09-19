import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm_s39bqo.css';
import '../../css/b/bf32wh85n.css';
import '../../css/l/li_wjjrfl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm_s39bqo"/><path class="bf32wh85n"/><path class="li_wjjrfl"/>`,
		"fallback": "carbon:ibm-cloud-logging",
	});
}

export default Component;
