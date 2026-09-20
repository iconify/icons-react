import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dasur6gli.css';
import '../../css/d/ds-zzgbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dasur6gli"/><path class="ds-zzgbaf"/></g>`,
		"fallback": "tabler:gift",
	});
}

export default Component;
