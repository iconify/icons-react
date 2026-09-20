import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ygy5zxbcw.css';
import '../../css/q/qf193fb5c.css';
import '../../css/z/ze8u81bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ygy5zxbcw"/><path class="qf193fb5c"/><path class="ze8u81bii"/></g>`,
		"fallback": "tabler:galaxy",
	});
}

export default Component;
