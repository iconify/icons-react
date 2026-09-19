import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/e/e80_rbc2p.css';
import '../../css/x/xi4cp6bpr.css';
import '../../css/h/hdkq8bcit.css';
import '../../css/l/l6nngvbag.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEV7CZdDs"><g class="wqznn1ydc"><path class="e80_rbc2p"/><path class="xi4cp6bpr"/><path class="hdkq8bcit"/><path class="l6nngvbag"/></g></mask></defs><path mask="url(#SVGEV7CZdDs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:diving-suit",
	});
}

export default Component;
