import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypka-nb4x.css';
import '../../css/n/n04szjpnk.css';
import '../../css/b/b1asx0uox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ypka-nb4x"/><path class="n04szjpnk"/><path class="b1asx0uox"/></g>`,
		"fallback": "tabler:circle-key",
	});
}

export default Component;
