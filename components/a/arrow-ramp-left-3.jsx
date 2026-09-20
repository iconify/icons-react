import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r4hrv80mp.css';
import '../../css/f/fsp8jz4tu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r4hrv80mp"/><path class="fsp8jz4tu"/></g>`,
		"fallback": "tabler:arrow-ramp-left-3",
	});
}

export default Component;
