import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yvt-cfbxg.css';
import '../../css/w/w47ts_bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yvt-cfbxg"/><path class="w47ts_bhh"/></g>`,
		"fallback": "tabler:coin-yuan",
	});
}

export default Component;
