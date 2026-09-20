import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cec2pqbum.css';
import '../../css/z/zaius3qog.css';
import '../../css/r/rvymobzlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cec2pqbum"/><path class="zaius3qog"/><path class="rvymobzlx"/></g>`,
		"fallback": "reicon:hierarchy-square",
	});
}

export default Component;
