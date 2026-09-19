import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gwye36byq.css';
import '../../css/b/blg8u174q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKLmrrc1o"><g class="v3_i3wktz"><rect class="gwye36byq"/><path class="blg8u174q"/></g></mask></defs><path mask="url(#SVGKLmrrc1o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:engineering-brand",
	});
}

export default Component;
