import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/q/q8p1cv2uv.css';
import '../../css/l/lurmblhlw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMhPncbRn"><g class="v3_i3wktz"><rect class="wzzwdrbyq"/><path class="q8p1cv2uv"/><path class="lurmblhlw"/></g></mask></defs><path mask="url(#SVGMhPncbRn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:id-card-h",
	});
}

export default Component;
