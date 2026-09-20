import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mxsw543dt.css';
import '../../css/z/z2-n9fa_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mxsw543dt"/><path class="z2-n9fa_i"/></g>`,
		"fallback": "tabler:brand-samsungpass",
	});
}

export default Component;
