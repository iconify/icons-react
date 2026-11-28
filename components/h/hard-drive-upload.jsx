import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gyq9bw-zf.css';
import '../../css/m/m6a3e3btz.css';
import '../../css/n/nak-4qbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gyq9bw-zf"/><rect class="m6a3e3btz"/><path class="nak-4qbbw"/></g>`,
		"fallback": "lucide:hard-drive-upload",
	});
}

export default Component;
