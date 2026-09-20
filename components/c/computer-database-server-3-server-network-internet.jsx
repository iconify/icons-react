import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tnn5xbr6f.css';
import '../../css/o/odo1--zku.css';
import '../../css/q/qco3bij0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="tnn5xbr6f"/><circle class="odo1--zku"/><path class="qco3bij0z"/></g>`,
		"fallback": "streamline:computer-database-server-3-server-network-internet",
	});
}

export default Component;
