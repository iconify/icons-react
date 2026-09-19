import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bb8tv3klv.css';
import '../../css/w/wdmnkdbcq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1BAsubKX"><g class="aql7dnt-u"><path class="bb8tv3klv"/><path clip-rule="evenodd" class="wdmnkdbcq"/></g></mask></defs><path mask="url(#SVG1BAsubKX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:anchor-two",
	});
}

export default Component;
