import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/f/fyepc-bup.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIGtf9chE"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="fyepc-bup"/></g></mask></defs><path mask="url(#SVGIGtf9chE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-success",
	});
}

export default Component;
