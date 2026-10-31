import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xj76bbbto.css';
import '../../css/a/aywpskbmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xj76bbbto"/><path class="aywpskbmc"/></g>`,
		"fallback": "coolicons:aperture-duotone-round",
	});
}

export default Component;
