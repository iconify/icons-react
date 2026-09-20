import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/k/kac42ebbo.css';
import '../../css/z/ziql97jnu.css';
import '../../css/a/a6szqu9as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="kac42ebbo"/><path class="ziql97jnu"/><path class="a6szqu9as"/></g>`,
		"fallback": "tabler:file-chart",
	});
}

export default Component;
