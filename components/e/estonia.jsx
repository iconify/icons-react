import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz_4v-slc.css';
import '../../css/t/t9rd-mm-b.css';
import '../../css/a/acbfzvwzo.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz_4v-slc"/><path class="t9rd-mm-b"/><path class="acbfzvwzo"/>`,
		"fallback": "tabler-flags:estonia",
	});
}

export default Component;
