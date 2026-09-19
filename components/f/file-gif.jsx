import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/my50xkbpo.css';
import '../../css/n/niqzbij3h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2vP1RcVR"><g class="v3_i3wktz"><path class="my50xkbpo"/><path class="niqzbij3h"/></g></mask></defs><path mask="url(#SVG2vP1RcVR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-gif",
	});
}

export default Component;
