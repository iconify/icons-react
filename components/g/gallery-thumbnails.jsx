import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i6w05zben.css';
import '../../css/c/cuz2sm10t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="i6w05zben"/><path class="cuz2sm10t"/></g>`,
		"fallback": "lucide:gallery-thumbnails",
	});
}

export default Component;
