import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/thg0fpbfw.css';
import '../../css/m/m_40_db0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="thg0fpbfw"/><path class="m_40_db0e"/></g>`,
		"fallback": "tabler:git-pull-request-conflict",
	});
}

export default Component;
