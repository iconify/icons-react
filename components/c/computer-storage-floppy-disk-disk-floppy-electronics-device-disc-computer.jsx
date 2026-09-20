import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yfqyjac1l.css';
import '../../css/q/qs1gornmf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yfqyjac1l"/><path class="qs1gornmf"/></g>`,
		"fallback": "streamline:computer-storage-floppy-disk-disk-floppy-electronics-device-disc-computer",
	});
}

export default Component;
