import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh7-72bhh.css';
import '../../css/x/x9oatwbkt.css';
import '../../css/d/d8kbcbc-x.css';
import '../../css/j/jj6pgz7hr.css';
import '../../css/a/azepj3bxo.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh7-72bhh"/><path class="x9oatwbkt"/><path class="d8kbcbc-x"/><path class="jj6pgz7hr"/><path class="azepj3bxo"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:greysexual",
	});
}

export default Component;
