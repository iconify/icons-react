import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7-dd38pb.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7-dd38pb"/>`,
		"fallback": "octicon:globe",
	});
}

export default Component;
