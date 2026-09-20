import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-ef9nbbz.css';
import '../../css/c/cdttq2bdi.css';
import '../../css/b/b9mfdcciy.css';
import '../../css/f/f_qhw5rdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-ef9nbbz"/><path class="cdttq2bdi"/><path class="b9mfdcciy"/><path class="f_qhw5rdg"/></g>`,
		"fallback": "tdesign:certificate-1",
	});
}

export default Component;
