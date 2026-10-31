import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5ilxtjms.css';
import '../../css/s/s955xdbnr.css';
import '../../css/c/ckn7fwb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i5ilxtjms"/><path class="s955xdbnr"/><path class="ckn7fwb6a"/></g>`,
		"fallback": "struq:home",
	});
}

export default Component;
