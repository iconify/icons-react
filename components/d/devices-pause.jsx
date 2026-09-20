import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ofe092k8a.css';
import '../../css/z/z_nvtgbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ofe092k8a"/><path class="z_nvtgbhe"/></g>`,
		"fallback": "tabler:devices-pause",
	});
}

export default Component;
