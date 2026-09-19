import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/y/yzqd_nbaw.css';
import '../../css/k/kgfwksm9f.css';
import '../../css/h/hq8qrvbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="yzqd_nbaw"/><path class="kgfwksm9f"/><path class="hq8qrvbfp"/></g>`,
		"fallback": "iconamoon:information-square-thin",
	});
}

export default Component;
