import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mwfiol2dj.css';
import '../../css/a/auvfzibbj.css';
import '../../css/z/zs3id2b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mwfiol2dj"/><rect class="auvfzibbj"/><path class="zs3id2b8k"/></g>`,
		"fallback": "lucide:gallery-horizontal",
	});
}

export default Component;
