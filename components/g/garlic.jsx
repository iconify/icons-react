import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3dmge_ey.css';
import '../../css/b/bdnk2k09n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s3dmge_ey"/><path class="bdnk2k09n"/></g>`,
		"fallback": "lucide-lab:garlic",
	});
}

export default Component;
