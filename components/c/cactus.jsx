import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/o/ohzyaebtv.css';
import '../../css/z/zclm7dbio.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4zKLYclc"><g class="v3_i3wktz"><path class="ohzyaebtv"/><path class="zclm7dbio"/></g></mask></defs><path mask="url(#SVG4zKLYclc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cactus",
	});
}

export default Component;
