import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/o/ot8wni60f.css';
import '../../css/w/w9qqdhocp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDIO61bsE"><g class="rohhhzb0l"><path class="j-v2u4nhg"/><path class="ot8wni60f"/><path class="w9qqdhocp"/></g></mask></defs><path mask="url(#SVGDIO61bsE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:benz",
	});
}

export default Component;
