import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qan-v46oz.css';
import '../../css/r/r-dqwzb9h.css';
import '../../css/s/s2i58ab4v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qan-v46oz"/><path class="r-dqwzb9h"/><path class="s2i58ab4v"/>`,
		"fallback": "energy-icons:cloche-20",
	});
}

export default Component;
