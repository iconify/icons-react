import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p22pm2-2k.css';
import '../../css/j/jtz18rbzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p22pm2-2k"/><path class="jtz18rbzz"/></g>`,
		"fallback": "lucide:file-scan",
	});
}

export default Component;
