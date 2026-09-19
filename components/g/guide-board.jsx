import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/k2j8b1jba.css';
import '../../css/h/h0pebzbkt.css';
import '../../css/i/ik07xqb4l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbfJGv2GB"><g class="v3_i3wktz"><path class="k2j8b1jba"/><path class="h0pebzbkt"/><path class="ik07xqb4l"/></g></mask></defs><path mask="url(#SVGbfJGv2GB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:guide-board",
	});
}

export default Component;
