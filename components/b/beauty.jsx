import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ueqtqjl_z.css';
import '../../css/v/v4mlrac6g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAVd9YqAr"><g class="aql7dnt-u"><path class="ueqtqjl_z"/><path class="v4mlrac6g"/></g></mask></defs><path mask="url(#SVGAVd9YqAr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:beauty",
	});
}

export default Component;
