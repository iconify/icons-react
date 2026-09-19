import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pax1n5bxy.css';
import '../../css/d/dwytx_boo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGN7fd9c0a"><g class="rohhhzb0l"><path class="pax1n5bxy"/><path class="dwytx_boo"/></g></mask></defs><path mask="url(#SVGN7fd9c0a)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:general-branch",
	});
}

export default Component;
