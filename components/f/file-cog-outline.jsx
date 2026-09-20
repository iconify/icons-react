import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vw3t96bes.css';
import '../../css/z/zbz1lfb5t.css';
import '../../css/c/cnnjisezc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vw3t96bes"/><path class="zbz1lfb5t"/><path class="cnnjisezc"/></g>`,
		"fallback": "solar:file-cog-outline",
	});
}

export default Component;
