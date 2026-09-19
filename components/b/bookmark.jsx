import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xjykdrcis.css';
import '../../css/s/skle95_tv.css';
import '../../css/u/uoq_q1lqx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGP24RLffG"><g class="v3_i3wktz"><path class="xjykdrcis"/><path clip-rule="evenodd" class="skle95_tv"/><path class="uoq_q1lqx"/></g></mask></defs><path mask="url(#SVGP24RLffG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bookmark",
	});
}

export default Component;
