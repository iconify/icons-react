import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-36k731j.css';
import '../../css/d/d9et4l_ew.css';
import '../../css/j/jwqccdbxc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-36k731j"/><path class="d9et4l_ew"/><path class="jwqccdbxc"/>`,
		"fallback": "devicon:burpsuite-wordmark",
	});
}

export default Component;
