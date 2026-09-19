import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ubq5zrksv.css';
import '../../css/a/as6uu1fdt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1IxIVcxW"><g class="aql7dnt-u"><path class="ubq5zrksv"/><path class="as6uu1fdt"/></g></mask></defs><path mask="url(#SVG1IxIVcxW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:exchange-four",
	});
}

export default Component;
