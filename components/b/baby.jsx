import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gllekcpqr.css';
import '../../css/m/ma_ceibkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gllekcpqr"/><path class="ma_ceibkh"/></g>`,
		"fallback": "vadivam:baby",
	});
}

export default Component;
