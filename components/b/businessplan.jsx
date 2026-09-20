import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wu4if607f.css';
import '../../css/z/zymwndbum.css';
import '../../css/p/p-6ogacze.css';
import '../../css/c/c3pm8cc2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wu4if607f"/><path class="zymwndbum"/><path class="p-6ogacze"/><path class="c3pm8cc2k"/></g>`,
		"fallback": "tabler:businessplan",
	});
}

export default Component;
