import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cag-9z.css';
import '../../css/t/t5pxry.css';
import '../../css/o/oxx-om.css';
import '../../css/p/p2_l7t.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWf0xkeRj"><path class="cag-9z t5pxry"/><path class="oxx-om p2_l7t t5pxry"/></mask></defs><path mask="url(#SVGWf0xkeRj)" class="botfzx"/><path class="gd_4-q p2_l7t t5pxry"/>`,
		"fallback": "line-md:filter-off-filled",
	});
}

export default Component;
