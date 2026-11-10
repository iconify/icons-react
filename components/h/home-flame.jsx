import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wdrknpbkl.css';
import '../../css/g/gnqe2d74g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wdrknpbkl"/><path class="gnqe2d74g"/></g>`,
		"fallback": "tabler:home-flame",
	});
}

export default Component;
