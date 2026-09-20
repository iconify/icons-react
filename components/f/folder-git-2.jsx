import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r5qicdcsm.css';
import '../../css/w/wjl-5kbwl.css';
import '../../css/x/xyon_4mfc.css';
import '../../css/n/ny1qr-80o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r5qicdcsm"/><path class="wjl-5kbwl"/><circle class="xyon_4mfc"/><circle class="ny1qr-80o"/></g>`,
		"fallback": "lucide:folder-git-2",
	});
}

export default Component;
