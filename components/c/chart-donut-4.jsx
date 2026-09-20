import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xa2f_xblh.css';
import '../../css/g/gjzoqze8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xa2f_xblh"/><path class="gjzoqze8y"/></g>`,
		"fallback": "tabler:chart-donut-4",
	});
}

export default Component;
