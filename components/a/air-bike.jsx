import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xr59g6zsq.css';
import '../../css/p/pyvea6veh.css';
import '../../css/o/odvo2bwsa.css';
import '../../css/p/pywn4zp7t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSEaTMdwP"><g class="rohhhzb0l"><path class="xr59g6zsq"/><circle class="pyvea6veh"/><path class="odvo2bwsa"/><path class="pywn4zp7t"/></g></mask></defs><path mask="url(#SVGSEaTMdwP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:air-bike",
	});
}

export default Component;
