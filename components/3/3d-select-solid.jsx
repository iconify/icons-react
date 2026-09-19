import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kpsn8jbjf.css';
import '../../css/y/yq9xunb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kpsn8jbjf"/><path class="yq9xunb3g"/></g>`,
		"fallback": "iconoir:3d-select-solid",
	});
}

export default Component;
