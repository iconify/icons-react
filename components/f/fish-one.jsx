import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yf7u2p6yo.css';
import '../../css/w/wue07mb6g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1fRDCb8t"><g class="ft5dv1b6b"><path class="yf7u2p6yo"/><circle class="wue07mb6g"/></g></mask></defs><path mask="url(#SVG1fRDCb8t)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fish-one",
	});
}

export default Component;
