import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kz9epiigo.css';
import '../../css/m/mswo_dbyo.css';
import '../../css/p/pltokbbut.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="kz9epiigo"/><circle class="mswo_dbyo"/><path class="pltokbbut"/></g>`,
		"fallback": "jam:flickr-square",
	});
}

export default Component;
