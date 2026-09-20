import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zho5jzm4t.css';
import '../../css/m/mlz9rob2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zho5jzm4t"/><path class="mlz9rob2a"/></g>`,
		"fallback": "tabler:arrow-bounce",
	});
}

export default Component;
