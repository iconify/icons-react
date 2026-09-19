import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r1ocmpbbi.css';
import '../../css/l/lqjcodqtu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiFPYgbME"><g class="rohhhzb0l"><path class="r1ocmpbbi"/><path class="lqjcodqtu"/></g></mask></defs><path mask="url(#SVGiFPYgbME)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:converging-gateway",
	});
}

export default Component;
