import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4l8cxbpg.css';
import '../../css/j/j6agt1nji.css';
import '../../css/x/x07i0sb0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4l8cxbpg"/><path class="j6agt1nji"/><path class="x07i0sb0a"/>`,
		"fallback": "energy-icons:cassette-20",
	});
}

export default Component;
