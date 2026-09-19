import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gj7m2tbbh.css';
import '../../css/j/j7j-p3g_y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGttcsRdKb"><g class="v3_i3wktz"><path class="gj7m2tbbh"/><path class="j7j-p3g_y"/></g></mask></defs><path mask="url(#SVGttcsRdKb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:harm",
	});
}

export default Component;
