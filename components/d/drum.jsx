import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5snfub5j.css';
import '../../css/t/t2u0w80it.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p5snfub5j"/><path class="t2u0w80it"/></g>`,
		"fallback": "vadivam:drum",
	});
}

export default Component;
