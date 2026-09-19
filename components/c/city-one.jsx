import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bgr4__y9v.css';
import '../../css/u/upf9j8dhv.css';
import '../../css/q/qiacie2ce.css';
import '../../css/l/l0y6kqsdf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOL58XdYm"><g class="v3_i3wktz"><path class="bgr4__y9v"/><rect class="upf9j8dhv"/><rect class="qiacie2ce"/><path class="l0y6kqsdf"/></g></mask></defs><path mask="url(#SVGOL58XdYm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:city-one",
	});
}

export default Component;
