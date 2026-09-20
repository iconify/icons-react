import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/k/kac42ebbo.css';
import '../../css/a/a6szqu9as.css';
import '../../css/l/l_x68dbom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="kac42ebbo"/><path class="a6szqu9as"/><path class="l_x68dbom"/></g>`,
		"fallback": "tabler:file-time",
	});
}

export default Component;
