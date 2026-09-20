import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/ju48nt6jk.css';
import '../../css/c/crudsbcuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ju48nt6jk"/><path class="crudsbcuf"/></g>`,
		"fallback": "tabler:barrel-off",
	});
}

export default Component;
