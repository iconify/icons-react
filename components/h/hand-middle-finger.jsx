import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llj46q5hf.css';
import '../../css/g/gvi6q-b4n.css';
import '../../css/l/lg_epd7vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="llj46q5hf"/><path class="gvi6q-b4n"/><path class="lg_epd7vn"/></g>`,
		"fallback": "tabler:hand-middle-finger",
	});
}

export default Component;
