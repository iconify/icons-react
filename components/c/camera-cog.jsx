import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gba3ffacd.css';
import '../../css/g/gkmysobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gba3ffacd"/><path class="gkmysobhf"/></g>`,
		"fallback": "tabler:camera-cog",
	});
}

export default Component;
