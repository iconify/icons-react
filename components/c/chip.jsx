import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iwzlfdbma.css';
import '../../css/m/mtcvzm4un.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2V9Pcd8x"><g class="rohhhzb0l"><rect class="iwzlfdbma"/><path class="mtcvzm4un"/></g></mask></defs><path mask="url(#SVG2V9Pcd8x)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chip",
	});
}

export default Component;
