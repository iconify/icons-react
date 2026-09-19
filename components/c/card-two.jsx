import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/smw8n4bjx.css';
import '../../css/m/mbvagtp9n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGELUQo9DW"><g class="v3_i3wktz"><path class="smw8n4bjx"/><path class="mbvagtp9n"/></g></mask></defs><path mask="url(#SVGELUQo9DW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:card-two",
	});
}

export default Component;
