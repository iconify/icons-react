import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwek42bav.css';
import '../../css/v/vjuvz2bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gwek42bav"/><path class="vjuvz2bvw"/></g>`,
		"fallback": "lucide:badge-russian-ruble",
	});
}

export default Component;
