import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3u9v8bra.css';
import '../../css/c/cs-7rpbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s3u9v8bra"/><path class="cs-7rpbto"/></g>`,
		"fallback": "keyline-icons:bike-duotone",
	});
}

export default Component;
