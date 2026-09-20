import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a2niimcau.css';
import '../../css/g/gqi8u6bvt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a2niimcau"/><path class="gqi8u6bvt"/></g>`,
		"fallback": "streamline:hard-drive-1",
	});
}

export default Component;
