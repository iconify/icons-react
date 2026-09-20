import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wnifsfngp.css';
import '../../css/r/rhggw7-pd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wnifsfngp"/><path class="rhggw7-pd"/></g>`,
		"fallback": "reicon:blend",
	});
}

export default Component;
