import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/b/blna7_bzy.css';
import '../../css/p/pqhat2p9w.css';
import '../../css/m/m0k56ib_g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGn8eDybEM"><g class="ufeehvblu"><path class="blna7_bzy"/><path class="pqhat2p9w"/><path class="m0k56ib_g"/></g></mask></defs><path mask="url(#SVGn8eDybEM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:expand-left",
	});
}

export default Component;
