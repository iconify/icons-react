import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/s/sz6vb1uxi.css';
import '../../css/o/oqrlyv_mz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxJyo8bej"><g class="ylrso7y3c"><path class="sz6vb1uxi"/><path class="oqrlyv_mz"/></g></mask></defs><path mask="url(#SVGxJyo8bej)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-focus",
	});
}

export default Component;
