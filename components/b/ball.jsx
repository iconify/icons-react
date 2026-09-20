import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/onmc1xecs.css';
import '../../css/d/dop-fab9n.css';
import '../../css/o/obsnj1bml.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="onmc1xecs"/><path class="dop-fab9n"/><path class="obsnj1bml"/></g>`,
		"fallback": "streamline-plump-color:ball",
	});
}

export default Component;
