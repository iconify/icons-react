import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mi03g9veq.css';
import '../../css/f/f93n38pwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mi03g9veq"/><path class="f93n38pwl"/></g>`,
		"fallback": "hugeicons:ai-folder-02",
	});
}

export default Component;
