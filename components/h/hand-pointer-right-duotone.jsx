import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s3bjkab-l.css';
import '../../css/k/k-wi-8bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s3bjkab-l"/><path class="k-wi-8bpk"/></g>`,
		"fallback": "keyline-icons:hand-pointer-right-duotone",
	});
}

export default Component;
