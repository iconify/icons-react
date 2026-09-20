import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1v_l-b3u.css';
import '../../css/f/ff6l7zjhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b1v_l-b3u"/><path class="ff6l7zjhi"/></g>`,
		"fallback": "lucide-lab:apple-core",
	});
}

export default Component;
