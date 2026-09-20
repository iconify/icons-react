import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wzt949h1h.css';
import '../../css/f/fmmkm6nqf.css';
import '../../css/x/x8p-t_bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wzt949h1h"/><path class="fmmkm6nqf"/><path class="x8p-t_bwx"/></g>`,
		"fallback": "tabler:asset",
	});
}

export default Component;
