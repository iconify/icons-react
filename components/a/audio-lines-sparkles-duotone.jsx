import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sqlthnb9w.css';
import '../../css/i/ibuzkpb7d.css';
import '../../css/n/ntmn62h7t.css';
import '../../css/y/yl66cbb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sqlthnb9w"/><path class="ibuzkpb7d"/><path class="ntmn62h7t"/><path class="yl66cbb6s"/></g>`,
		"fallback": "keyline-icons:audio-lines-sparkles-duotone",
	});
}

export default Component;
