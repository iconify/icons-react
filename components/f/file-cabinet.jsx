import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/y6x99abmn.css';
import '../../css/f/fdbt40b4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9Xd4UNCW"><g class="rohhhzb0l"><path class="y6x99abmn"/><path class="fdbt40b4q"/></g></mask></defs><path mask="url(#SVG9Xd4UNCW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-cabinet",
	});
}

export default Component;
