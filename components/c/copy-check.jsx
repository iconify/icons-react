import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sdixjibrv.css';
import '../../css/y/y2r600b7v.css';
import '../../css/z/zlf7r1kic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sdixjibrv"/><rect class="y2r600b7v"/><path class="zlf7r1kic"/></g>`,
		"fallback": "lucide:copy-check",
	});
}

export default Component;
