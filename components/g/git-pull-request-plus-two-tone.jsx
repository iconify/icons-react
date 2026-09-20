import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j45eambkn.css';
import '../../css/k/kk3pr6bqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j45eambkn"/><path class="kk3pr6bqm"/></g>`,
		"fallback": "keyline-icons:git-pull-request-plus-two-tone",
	});
}

export default Component;
