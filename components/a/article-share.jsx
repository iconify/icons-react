import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb-wvabvh.css';
import '../../css/d/d55v_x0qd.css';
import '../../css/y/yvl5yabej.css';
import '../../css/g/gkefinb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb-wvabvh"/><path clip-rule="evenodd" class="d55v_x0qd"/><path class="yvl5yabej"/><path clip-rule="evenodd" class="gkefinb2h"/>`,
		"fallback": "stash:article-share",
	});
}

export default Component;
