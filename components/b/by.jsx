import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mvgm3_byw.css';
import '../../css/u/u1kvkabbo.css';
import '../../css/k/kitbxqs-d.css';
import '../../css/r/rzr8lmbfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mvgm3_byw"/><path class="u1kvkabbo"/><path class="kitbxqs-d"/><path class="rzr8lmbfw"/></g>`,
		"fallback": "circle-flags:by",
	});
}

export default Component;
