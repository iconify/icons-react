import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pawrjyblj.css';
import '../../css/r/r1xyc4b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pawrjyblj"/><path class="r1xyc4b5b"/></g>`,
		"fallback": "tabler:devices-down",
	});
}

export default Component;
