import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/myuyavbme.css';
import '../../css/t/tpx7opa0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="myuyavbme"/><path class="tpx7opa0a"/></g>`,
		"fallback": "reicon:award3",
	});
}

export default Component;
