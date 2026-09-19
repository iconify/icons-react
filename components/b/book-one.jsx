import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xaf8zqb-s.css';
import '../../css/r/rie76vbte.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0DcpHc9l"><g class="v3_i3wktz"><path class="xaf8zqb-s"/><path class="rie76vbte"/></g></mask></defs><path mask="url(#SVG0DcpHc9l)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:book-one",
	});
}

export default Component;
