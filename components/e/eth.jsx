import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dor-qnbot.css';
import '../../css/u/uzfziisgz.css';
import '../../css/j/jv7_enpyu.css';
import '../../css/i/inlew3bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dor-qnbot"/><path class="uzfziisgz"/><path clip-rule="evenodd" class="jv7_enpyu"/><path clip-rule="evenodd" class="inlew3bgh"/>`,
		"fallback": "token:eth",
	});
}

export default Component;
