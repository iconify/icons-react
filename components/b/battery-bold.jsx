import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4hqn8iyp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4hqn8iyp"/>`,
		"fallback": "glyphs:battery-bold",
	});
}

export default Component;
