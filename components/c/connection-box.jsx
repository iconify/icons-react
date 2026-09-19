import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/pi6fvo7zc.css';
import '../../css/q/qdrw9yaqh.css';
import '../../css/t/tea1m2b_s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQR2TeczY"><g class="ufeehvblu"><path class="pi6fvo7zc"/><path class="qdrw9yaqh"/><path class="tea1m2b_s"/></g></mask></defs><path mask="url(#SVGQR2TeczY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:connection-box",
	});
}

export default Component;
