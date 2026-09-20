import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t8drw368i.css';
import '../../css/a/afjmqabbu.css';
import '../../css/k/k1uktu2et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t8drw368i"/><path class="afjmqabbu"/><path class="k1uktu2et"/></g>`,
		"fallback": "keyline-icons:circle-play-two-tone",
	});
}

export default Component;
