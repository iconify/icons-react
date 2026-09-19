import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_5ae769w.css';
import '../../css/p/p57t2dkbq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGpMgSGkd"><g class="rohhhzb0l"><path class="a_5ae769w"/><path class="p57t2dkbq"/></g></mask></defs><path mask="url(#SVGGpMgSGkd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gas",
	});
}

export default Component;
