import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tu5n-0luo.css';
import '../../css/x/xz9lnmbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tu5n-0luo"/><path class="xz9lnmbik"/></g>`,
		"fallback": "tabler:avocado",
	});
}

export default Component;
