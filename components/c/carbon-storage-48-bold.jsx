import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odlpk9b9a.css';
import '../../css/q/qxkvmlb6f.css';
import '../../css/v/vj-jo02il.css';
import '../../css/q/qrv6rjbow.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odlpk9b9a"/><path class="qxkvmlb6f"/><path class="vj-jo02il"/><path class="qrv6rjbow"/>`,
		"fallback": "energy-icons:carbon-storage-48-bold",
	});
}

export default Component;
