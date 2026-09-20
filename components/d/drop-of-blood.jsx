import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmwchobpn.css';
import '../../css/e/e8_03wb-a.css';
import '../../css/a/av5-hcwri.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmwchobpn"/><path class="e8_03wb-a"/><path class="av5-hcwri"/>`,
		"fallback": "openmoji:drop-of-blood",
	});
}

export default Component;
