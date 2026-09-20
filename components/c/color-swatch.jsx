import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/idfvmxr2o.css';
import '../../css/u/uc13pobzv.css';
import '../../css/x/x3sbhjonu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="idfvmxr2o"/><path class="uc13pobzv"/><path class="x3sbhjonu"/></g>`,
		"fallback": "tabler:color-swatch",
	});
}

export default Component;
