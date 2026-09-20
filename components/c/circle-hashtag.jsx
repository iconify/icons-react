import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q58jyg4uk.css';
import '../../css/b/bkf9fvy4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="q58jyg4uk"/><path class="bkf9fvy4n"/></g>`,
		"fallback": "reicon:circle-hashtag",
	});
}

export default Component;
