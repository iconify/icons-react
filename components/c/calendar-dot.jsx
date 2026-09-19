import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j_frwf33v.css';
import '../../css/u/ule3zhb1a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc7qFMboN"><g class="aql7dnt-u"><rect class="j_frwf33v"/><path class="ule3zhb1a"/></g></mask></defs><path mask="url(#SVGc7qFMboN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:calendar-dot",
	});
}

export default Component;
