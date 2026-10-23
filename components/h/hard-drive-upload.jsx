import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t68w9oc2c.css';
import '../../css/t/tznk6deck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t68w9oc2c"/><path class="tznk6deck"/></g>`,
		"fallback": "vadivam:hard-drive-upload",
	});
}

export default Component;
