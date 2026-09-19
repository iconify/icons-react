import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/eum0i25rl.css';
import '../../css/p/p5fn7zxfk.css';
import '../../css/d/db5zhxapf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRa3Mgdns"><g class="v3_i3wktz"><path class="eum0i25rl"/><path class="p5fn7zxfk"/><path class="db5zhxapf"/></g></mask></defs><path mask="url(#SVGRa3Mgdns)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:color-filter",
	});
}

export default Component;
