import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/e/ecqskqbjc.css';
import '../../css/v/vhhxkzb1a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMXrrCcnc"><g class="v3_i3wktz"><path class="ecqskqbjc"/><path class="vhhxkzb1a"/></g></mask></defs><path mask="url(#SVGMXrrCcnc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:flask",
	});
}

export default Component;
