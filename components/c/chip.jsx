import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b8uij2b6n.css';
import '../../css/v/v6qg3zuvy.css';
import '../../css/g/gn6dmkbcd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="b8uij2b6n"/><rect class="v6qg3zuvy"/><path class="gn6dmkbcd"/></g>`,
		"fallback": "charm:chip",
	});
}

export default Component;
