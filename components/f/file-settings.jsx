import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gel40xb3w.css';
import '../../css/k/kac42ebbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gel40xb3w"/><path class="kac42ebbo"/></g>`,
		"fallback": "tabler:file-settings",
	});
}

export default Component;
