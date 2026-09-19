import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/i/ijo7ipb8r.css';
import '../../css/y/yfgog0bsg.css';
import '../../css/r/rwr7r_b4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0fFj4dcG"><g class="hv130ab-t"><circle class="ijo7ipb8r"/><path class="yfgog0bsg"/><path class="rwr7r_b4q"/></g></mask></defs><path mask="url(#SVG0fFj4dcG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:font-search",
	});
}

export default Component;
