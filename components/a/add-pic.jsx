import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr87l5bdb.css';
import '../../css/k/k0rioybmz.css';
import '../../css/f/fzbd34b4c.css';
import '../../css/w/wah34acde.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbxxcLbnt"><g class="lr87l5bdb"><path class="k0rioybmz"/><path class="fzbd34b4c"/><path class="wah34acde"/></g></mask></defs><path mask="url(#SVGbxxcLbnt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:add-pic",
	});
}

export default Component;
