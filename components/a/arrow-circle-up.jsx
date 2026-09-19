import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/h/hvpug8bzi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9BbMHtSG"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="hvpug8bzi"/></g></mask></defs><path mask="url(#SVG9BbMHtSG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:arrow-circle-up",
	});
}

export default Component;
