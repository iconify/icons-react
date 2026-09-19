import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sp5tj4b-c.css';
import '../../css/b/b_aee3w3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sp5tj4b-c"/><path class="b_aee3w3e"/></g>`,
		"fallback": "hugeicons:file-sync",
	});
}

export default Component;
