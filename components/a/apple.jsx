import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkazs2b4g.css';
import '../../css/r/rms53rbhq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkazs2b4g"/><path class="rms53rbhq"/>`,
		"fallback": "carbon:apple",
	});
}

export default Component;
