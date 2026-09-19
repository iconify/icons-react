import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/w/w40po-bqw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcNqdRbId"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="w40po-bqw"/></g></mask></defs><path mask="url(#SVGcNqdRbId)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:black-eight",
	});
}

export default Component;
