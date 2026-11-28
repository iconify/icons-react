import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcuc961yk.css';
import '../../css/k/k6sv8h06y.css';
import '../../css/l/l0n7j5p3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kcuc961yk"/><path class="k6sv8h06y"/><path class="l0n7j5p3c"/></g>`,
		"fallback": "lucide:clock-arrow-right",
	});
}

export default Component;
