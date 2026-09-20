import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/isv7l49qo.css';
import '../../css/v/va4yoc50j.css';
import '../../css/t/trsr16b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="isv7l49qo"/><ellipse class="va4yoc50j"/><path class="trsr16b4c"/></g>`,
		"fallback": "lucide:drum",
	});
}

export default Component;
