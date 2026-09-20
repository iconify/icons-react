import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j3b5azbum.css';
import '../../css/v/v2cqfjbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j3b5azbum"/><path class="v2cqfjbdk"/></g>`,
		"fallback": "tabler:devices-x",
	});
}

export default Component;
