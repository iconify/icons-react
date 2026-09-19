import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc_6km5yf.css';
import '../../css/s/s6lldoo2z.css';
import '../../css/n/nyo9evb1o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKMbDcd1A"><g class="ft5dv1b6b"><path class="pc_6km5yf"/><path class="s6lldoo2z"/><path clip-rule="evenodd" class="nyo9evb1o"/></g></mask></defs><path mask="url(#SVGKMbDcd1A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-question",
	});
}

export default Component;
