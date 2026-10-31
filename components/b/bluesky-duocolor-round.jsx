import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zkf_pacah.css';
import '../../css/r/rppyogb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zkf_pacah"/><path class="rppyogb8v"/></g>`,
		"fallback": "coolicons:bluesky-duocolor-round",
	});
}

export default Component;
