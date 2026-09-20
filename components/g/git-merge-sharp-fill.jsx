import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zwmlwzbho.css';
import '../../css/g/g9tgbxrav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zwmlwzbho"/><path class="g9tgbxrav"/></g>`,
		"fallback": "keyline-icons:git-merge-sharp-fill",
	});
}

export default Component;
