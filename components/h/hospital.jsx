import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tb-dkyakg.css';
import '../../css/b/bs7qipb-w.css';
import '../../css/i/iosag-ytp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tb-dkyakg"/><path class="bs7qipb-w"/><path class="iosag-ytp"/></g>`,
		"fallback": "lucide:hospital",
	});
}

export default Component;
