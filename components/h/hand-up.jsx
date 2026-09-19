import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/ka6c5cbmx.css';
import '../../css/p/puckv5bwn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgzUlicSd"><g class="v3_i3wktz"><path class="ka6c5cbmx"/><path clip-rule="evenodd" class="puckv5bwn"/></g></mask></defs><path mask="url(#SVGgzUlicSd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hand-up",
	});
}

export default Component;
