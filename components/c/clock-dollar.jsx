import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b2t-tzb3i.css';
import '../../css/l/la40zl-mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b2t-tzb3i"/><path class="la40zl-mi"/></g>`,
		"fallback": "tabler:clock-dollar",
	});
}

export default Component;
