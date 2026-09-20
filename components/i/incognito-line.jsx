import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xkf6ttbje.css';
import '../../css/a/a96k7rbus.css';
import '../../css/c/ceitnjb9j.css';
import '../../css/w/wy2n5sbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xkf6ttbje"/><circle class="a96k7rbus"/><circle class="ceitnjb9j"/><path class="wy2n5sbyh"/></g>`,
		"fallback": "majesticons:incognito-line",
	});
}

export default Component;
