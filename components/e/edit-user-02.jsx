import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/ghya2pbow.css';
import '../../css/v/v-dl27bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ghya2pbow"/><path class="v-dl27bvf"/></g>`,
		"fallback": "hugeicons:edit-user-02",
	});
}

export default Component;
