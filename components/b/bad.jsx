import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm7opcb8n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkrBqIdmR"><path class="hm7opcb8n"/></mask></defs><path mask="url(#SVGkrBqIdmR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bad",
	});
}

export default Component;
