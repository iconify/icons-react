import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqa593wdp.css';
import '../../css/o/ocnv6pbzx.css';
import '../../css/u/unk-nx60q.css';
import '../../css/k/kzhs64u9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqa593wdp wm-a"/><path class="ocnv6pbzx wm-k"/><path class="unk-nx60q wm-k"/><path class="kzhs64u9l wm-k"/>`,
		"fallback": "withicons-bauhaus:flag",
	});
}

export default Component;
