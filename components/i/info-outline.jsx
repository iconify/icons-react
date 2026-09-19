import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxfyl1b5k.css';
import '../../css/g/g-1ion60j.css';
import '../../css/v/vz812pbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="info-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="oxfyl1b5k"/><path clip-rule="evenodd" class="g-1ion60j"/><path class="vz812pbmd"/></g></g>`,
		"fallback": "cuida:info-outline",
	});
}

export default Component;
