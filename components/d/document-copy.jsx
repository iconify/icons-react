import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ngdz28sre.css';
import '../../css/d/dtndd7b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ngdz28sre"/><path class="dtndd7b-m"/></g>`,
		"fallback": "reicon:document-copy",
	});
}

export default Component;
