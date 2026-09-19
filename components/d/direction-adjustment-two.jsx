import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uxdwchstq.css';
import '../../css/y/yp7rfpwnl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh2sbxeZf"><g class="aql7dnt-u"><path class="uxdwchstq"/><circle class="yp7rfpwnl"/></g></mask></defs><path mask="url(#SVGh2sbxeZf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:direction-adjustment-two",
	});
}

export default Component;
