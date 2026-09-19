import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw708p-8f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw708p-8f"/>`,
		"fallback": "glyphs:activity-1-duo",
	});
}

export default Component;
