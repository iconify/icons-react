import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ev5eq7b-b.css';
import '../../css/s/soz_-0bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ev5eq7b-b"/><path class="soz_-0bwx"/></g>`,
		"fallback": "keyline-icons:hammer-two-tone",
	});
}

export default Component;
