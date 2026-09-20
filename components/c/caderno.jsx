import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di5_344sf.css';
import '../../css/j/jpo8em2jn.css';
import '../../css/k/k5xw5glig.css';
import '../../css/g/g62l6wbpm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di5_344sf"/><path class="jpo8em2jn"/><path class="k5xw5glig"/><path class="g62l6wbpm"/>`,
		"fallback": "selfhst:caderno",
	});
}

export default Component;
