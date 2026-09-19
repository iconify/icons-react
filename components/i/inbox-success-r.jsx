import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/z/zr8c_hb4z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIwDUre7V"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="zr8c_hb4z"/></g></mask></defs><path mask="url(#SVGIwDUre7V)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:inbox-success-r",
	});
}

export default Component;
