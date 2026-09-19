import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zacvbf9rr.css';
import '../../css/b/bex3sxi3x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zacvbf9rr"/><path class="bex3sxi3x"/>`,
		"fallback": "ant-design:funnel-plot-twotone",
	});
}

export default Component;
