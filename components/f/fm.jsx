import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/od4n0x7ka.css';
import '../../css/y/y5pfaqb4e.css';
import '../../css/q/qiltuobnx.css';
import '../../css/p/p5eipvbsq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0X4lJdef"><g class="aql7dnt-u"><circle class="od4n0x7ka"/><path class="y5pfaqb4e"/><path class="qiltuobnx"/><path class="p5eipvbsq"/></g></mask></defs><path mask="url(#SVG0X4lJdef)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fm",
	});
}

export default Component;
