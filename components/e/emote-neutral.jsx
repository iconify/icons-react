import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0ks-cr2h.css';
import '../../css/b/bhg-vwbun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d0ks-cr2h"/><path class="bhg-vwbun"/>`,
		"fallback": "ix:emote-neutral",
	});
}

export default Component;
