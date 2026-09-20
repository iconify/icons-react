import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvbqqjbjd.css';
import '../../css/g/ghq-bmqvm.css';
import '../../css/j/jsej37bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rvbqqjbjd"/><path class="ghq-bmqvm"/><path class="jsej37bqz"/></g>`,
		"fallback": "tdesign:edit-1",
	});
}

export default Component;
