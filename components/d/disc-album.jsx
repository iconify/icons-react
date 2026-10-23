import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xr1d7qw6i.css';
import '../../css/b/bq3m0zbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xr1d7qw6i"/><path class="bq3m0zbjp"/></g>`,
		"fallback": "vadivam:disc-album",
	});
}

export default Component;
