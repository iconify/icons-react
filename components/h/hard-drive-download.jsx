import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9w5mybtm.css';
import '../../css/m/m6a3e3btz.css';
import '../../css/p/p0sd-vr-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y9w5mybtm"/><rect class="m6a3e3btz"/><path class="p0sd-vr-x"/></g>`,
		"fallback": "lucide:hard-drive-download",
	});
}

export default Component;
