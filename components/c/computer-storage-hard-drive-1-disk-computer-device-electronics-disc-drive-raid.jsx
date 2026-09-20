import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ymyhvea6b.css';
import '../../css/o/o32ba5f7u.css';
import '../../css/r/rhq1sb0yc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="ymyhvea6b"/><path class="o32ba5f7u"/><circle class="rhq1sb0yc"/></g>`,
		"fallback": "streamline:computer-storage-hard-drive-1-disk-computer-device-electronics-disc-drive-raid",
	});
}

export default Component;
