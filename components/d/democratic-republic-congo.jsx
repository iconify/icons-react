import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew78g6rhn.css';
import '../../css/q/qitmchgwd.css';
import '../../css/w/w3tlvb73i.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew78g6rhn"/><path class="qitmchgwd"/><path class="w3tlvb73i"/>`,
		"fallback": "tabler-flags:democratic-republic-congo",
	});
}

export default Component;
