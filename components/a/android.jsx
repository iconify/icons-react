import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/noih5objo.css';
import '../../css/b/buxkfmbco.css';
import '../../css/n/nvkuv6u_b.css';
import '../../css/d/dedtfabrl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5jFRBbpO"><g class="ft5dv1b6b"><path class="noih5objo"/><path class="buxkfmbco"/><circle class="nvkuv6u_b"/><circle class="dedtfabrl"/></g></mask></defs><path mask="url(#SVG5jFRBbpO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:android",
	});
}

export default Component;
