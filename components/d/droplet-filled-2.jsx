import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g8s3rabku.css';
import '../../css/c/c4zd_hbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g8s3rabku"/><path class="c4zd_hbkr"/></g>`,
		"fallback": "tabler:droplet-filled-2",
	});
}

export default Component;
