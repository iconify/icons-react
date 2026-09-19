import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yj4qg8jty.css';
import '../../css/l/lrhr39bkv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2HSJ85Qo"><g class="aql7dnt-u"><path class="yj4qg8jty"/><path class="lrhr39bkv"/></g></mask></defs><path mask="url(#SVG2HSJ85Qo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:heart-ballon",
	});
}

export default Component;
