import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ki1kw7bma.css';
import '../../css/j/jdf2gobdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ki1kw7bma"/><path class="jdf2gobdi"/></g>`,
		"fallback": "akar-icons:ascending",
	});
}

export default Component;
