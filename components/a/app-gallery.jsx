import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcxthib1x.css';
import '../../css/k/kk687b3gj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="kcxthib1x"/><path class="kk687b3gj"/></g>`,
		"fallback": "meteor-icons:app-gallery",
	});
}

export default Component;
