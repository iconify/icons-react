import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t1jo3sb8s.css';
import '../../css/f/f4rs0cbsv.css';
import '../../css/x/xppvq2ske.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="t1jo3sb8s"/><circle class="f4rs0cbsv"/><path class="xppvq2ske"/></g>`,
		"fallback": "iconamoon:folder-music",
	});
}

export default Component;
