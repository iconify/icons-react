import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/i/ix6japbud.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMOIx6bCt"><g class="ufeehvblu"><path class="oo_vs07_g"/><rect transform="rotate(45 24 16.929)" class="ix6japbud"/></g></mask></defs><path mask="url(#SVGMOIx6bCt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:financing",
	});
}

export default Component;
