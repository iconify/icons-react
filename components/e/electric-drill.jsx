import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mqe9jgjyr.css';
import '../../css/w/wqyxkuyuv.css';
import '../../css/a/a4soon8wk.css';
import '../../css/i/izth8wb4y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlbNZIdvN"><g class="v3_i3wktz"><path class="mqe9jgjyr"/><path class="wqyxkuyuv"/><path class="a4soon8wk"/><path class="izth8wb4y"/></g></mask></defs><path mask="url(#SVGlbNZIdvN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:electric-drill",
	});
}

export default Component;
