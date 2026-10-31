import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f55jp-0ny.css';
import '../../css/v/vuymt9b1f.css';
import '../../css/f/fcr2hygnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f55jp-0ny"/><path class="vuymt9b1f"/><path class="fcr2hygnf"/></g>`,
		"fallback": "struq:documents",
	});
}

export default Component;
