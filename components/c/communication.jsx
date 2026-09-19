import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/e/eavf2p1cc.css';
import '../../css/f/frmswmbkl.css';
import '../../css/g/gxo4p3b3m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpV6eZbzO"><g class="gopnm44um"><path class="eavf2p1cc"/><path class="frmswmbkl"/><path class="gxo4p3b3m"/></g></mask></defs><path mask="url(#SVGpV6eZbzO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:communication",
	});
}

export default Component;
