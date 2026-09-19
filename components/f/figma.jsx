import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/s/s_lvzkjgq.css';
import '../../css/z/zmxxr194t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG24BLRc5o"><g class="ylrso7y3c"><rect class="r8cyu3bwz"/><path class="s_lvzkjgq"/><path class="zmxxr194t"/></g></mask></defs><path mask="url(#SVG24BLRc5o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:figma",
	});
}

export default Component;
