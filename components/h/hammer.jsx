import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib08t_4oj.css';
import '../../css/e/epf28maej.css';
import '../../css/g/gg9khyk8m.css';
import '../../css/e/emqiupbaj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib08t_4oj"/><path class="epf28maej"/><path class="gg9khyk8m"/><path class="emqiupbaj"/>`,
		"fallback": "openmoji:hammer",
	});
}

export default Component;
