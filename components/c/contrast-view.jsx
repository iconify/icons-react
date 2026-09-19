import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bg8i-6qpe.css';
import '../../css/a/a2dqemwrc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtVNFwewy"><g class="v3_i3wktz"><path class="bg8i-6qpe"/><path class="a2dqemwrc"/></g></mask></defs><path mask="url(#SVGtVNFwewy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:contrast-view",
	});
}

export default Component;
