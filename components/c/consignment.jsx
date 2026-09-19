import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iwa012b2f.css';
import '../../css/y/y79rd2ghl.css';
import '../../css/z/z4ro1s-_b.css';
import '../../css/u/u__h28bup.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmpdesdke"><g class="rohhhzb0l"><path class="iwa012b2f"/><path class="y79rd2ghl"/><path class="z4ro1s-_b"/><path class="u__h28bup"/></g></mask></defs><path mask="url(#SVGmpdesdke)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:consignment",
	});
}

export default Component;
