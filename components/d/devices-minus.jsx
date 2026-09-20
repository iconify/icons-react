import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1l13ktbx.css';
import '../../css/j/jutjs7b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b1l13ktbx"/><path class="jutjs7b8d"/></g>`,
		"fallback": "tabler:devices-minus",
	});
}

export default Component;
