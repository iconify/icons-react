import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w5ismxbie.css';
import '../../css/x/xe_14vbba.css';
import '../../css/c/cbmnwebmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w5ismxbie"/><path class="xe_14vbba"/><path class="cbmnwebmv"/></g>`,
		"fallback": "vadivam:hash",
	});
}

export default Component;
