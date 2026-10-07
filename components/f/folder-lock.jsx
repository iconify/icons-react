import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a4nx-rb0u.css';
import '../../css/m/mmqibuurd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a4nx-rb0u"/><path class="mmqibuurd"/></g>`,
		"fallback": "tabler:folder-lock",
	});
}

export default Component;
