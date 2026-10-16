import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vu7zgc8gt.css';
import '../../css/d/dqapyabwu.css';
import '../../css/t/tke4h5b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vu7zgc8gt"/><circle class="dqapyabwu"/><circle class="tke4h5b0x"/></g>`,
		"fallback": "lucide:eighth-notes",
	});
}

export default Component;
