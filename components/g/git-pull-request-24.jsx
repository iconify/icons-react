import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajh12op2y.css';
import '../../css/q/qtmpeuosr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajh12op2y"/><path class="qtmpeuosr"/>`,
		"fallback": "octicon:git-pull-request-24",
	});
}

export default Component;
