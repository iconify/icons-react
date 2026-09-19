import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/p/p9msfmbxd.css';
import '../../css/i/itdqx4vmq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKLzWnbDx"><g class="aql7dnt-u"><path clip-rule="evenodd" class="p9msfmbxd"/><path class="itdqx4vmq"/></g></mask></defs><path mask="url(#SVGKLzWnbDx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:building-three",
	});
}

export default Component;
