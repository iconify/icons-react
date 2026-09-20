import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nvpzb3bwd.css';
import '../../css/s/sa-c47eyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nvpzb3bwd"/><path class="sa-c47eyu"/></g>`,
		"fallback": "tabler:home-2",
	});
}

export default Component;
