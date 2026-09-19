import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncyj44b5x.css';
import '../../css/f/ff2fwvbbo.css';
import '../../css/g/glb-8qe5m.css';
import '../../css/m/m3pj-ubkt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6JWbLpCA"><g class="ft5dv1b6b"><path class="ncyj44b5x"/><path class="ff2fwvbbo"/><path class="glb-8qe5m"/><path class="m3pj-ubkt"/></g></mask></defs><path mask="url(#SVG6JWbLpCA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-display",
	});
}

export default Component;
