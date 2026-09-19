import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/ly7322hhe.css';
import '../../css/n/nts83s09d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG17ZTkeUO"><g class="v3_i3wktz"><path class="ly7322hhe"/><path clip-rule="evenodd" class="nts83s09d"/></g></mask></defs><path mask="url(#SVG17ZTkeUO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hand-right",
	});
}

export default Component;
