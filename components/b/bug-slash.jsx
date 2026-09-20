import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o7psohbfh.css';
import '../../css/q/q90fv6qec.css';
import '../../css/a/a2wwsgbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o7psohbfh"/><path class="q90fv6qec"/><path class="a2wwsgbar"/></g>`,
		"fallback": "reicon:bug-slash",
	});
}

export default Component;
