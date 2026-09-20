import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mpii_xbbc.css';
import '../../css/m/mxtdwi--q.css';
import '../../css/r/rhq1sb0yc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mpii_xbbc"/><path class="mxtdwi--q"/><circle class="rhq1sb0yc"/></g>`,
		"fallback": "streamline:computer-storage-hard-drive-2-disk-computer-device-electronics-disc-drive-raid",
	});
}

export default Component;
