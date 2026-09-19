import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j850wac-i.css';
import '../../css/u/u_haqyhvf.css';
import '../../css/z/zrt4urc1f.css';
import '../../css/z/zsrvp_b7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="j850wac-i"/><path class="u_haqyhvf"/><circle class="zrt4urc1f"/><circle class="zsrvp_b7g"/></g>`,
		"fallback": "icon-park-solid:engineering-vehicle",
	});
}

export default Component;
