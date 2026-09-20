import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1t_bgblg.css';
import '../../css/l/ljyjriblh.css';
import '../../css/q/qaf2rb42e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1t_bgblg"/><path class="ljyjriblh"/><path class="qaf2rb42e"/>`,
		"fallback": "openmoji:flag-switzerland",
	});
}

export default Component;
