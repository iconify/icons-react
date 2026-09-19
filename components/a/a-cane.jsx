import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_gv6ibcq.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="svgIDb"><g class="ft5dv1b6b"><g clip-path="url(#svgIDa)"><path class="p_gv6ibcq"/></g><defs><clipPath id="svgIDa"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#svgIDb)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:a-cane",
	});
}

export default Component;
