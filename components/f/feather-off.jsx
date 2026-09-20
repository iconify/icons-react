import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d9f6xob4i.css';
import '../../css/x/xckw_89zs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d9f6xob4i"/><path class="xckw_89zs"/></g>`,
		"fallback": "tabler:feather-off",
	});
}

export default Component;
