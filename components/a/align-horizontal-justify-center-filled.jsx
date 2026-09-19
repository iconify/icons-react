import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvg_1-o8n.css';
import '../../css/m/m0esjaiqj.css';
import '../../css/a/abtzwvxwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="uvg_1-o8n"/><rect class="m0esjaiqj"/><path class="abtzwvxwi"/>`,
		"fallback": "boxicons:align-horizontal-justify-center-filled",
	});
}

export default Component;
