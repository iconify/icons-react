import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l2mynzb2c.css';
import '../../css/v/v1qwv7bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l2mynzb2c"/><path class="v1qwv7bbn"/></g>`,
		"fallback": "tabler:clock-12",
	});
}

export default Component;
