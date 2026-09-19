import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tp_-sbc1k.css';
import '../../css/x/x_83sd0yc.css';
import '../../css/v/v1msn87zh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9rsQWPvm"><g class="v3_i3wktz"><path class="tp_-sbc1k"/><path class="x_83sd0yc"/><path class="v1msn87zh"/></g></mask></defs><path mask="url(#SVG9rsQWPvm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bank-card",
	});
}

export default Component;
