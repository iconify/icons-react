import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/j1-9tgbck.css';
import '../../css/n/ny2zpnbhd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7ipxRbRJ"><g class="aql7dnt-u"><path class="j1-9tgbck"/><path class="ny2zpnbhd"/></g></mask></defs><path mask="url(#SVG7ipxRbRJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handwashing",
	});
}

export default Component;
