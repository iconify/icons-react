import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/y1y9esb0m.css';
import '../../css/c/c9bv-ub0g.css';
import '../../css/r/re_l3eb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="y1y9esb0m"/><path class="c9bv-ub0g"/></g><path clip-rule="evenodd" class="re_l3eb8a"/>`,
		"fallback": "solar:flip-vertical-bold-duotone",
	});
}

export default Component;
