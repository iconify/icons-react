import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aa8ym_b1a.css';
import '../../css/m/m6a3e3btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aa8ym_b1a"/><rect class="m6a3e3btz"/></g>`,
		"fallback": "lucide:hard-drive-download",
	});
}

export default Component;
