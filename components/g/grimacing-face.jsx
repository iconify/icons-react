import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/z/zfnawcc-o.css';
import '../../css/z/zmxw92a2p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGR5XL1dUA"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="zfnawcc-o"/><rect class="zmxw92a2p"/></g></mask></defs><path mask="url(#SVGR5XL1dUA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:grimacing-face",
	});
}

export default Component;
