import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jozfr4bht.css';
import '../../css/b/bgu4qnb1v.css';
import '../../css/d/dbndu9bzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jozfr4bht"/><path class="bgu4qnb1v"/><path class="dbndu9bzr"/>`,
		"fallback": "fxemoji:americanfootball",
	});
}

export default Component;
