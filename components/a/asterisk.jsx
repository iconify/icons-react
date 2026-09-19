import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aww87p9pp.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aww87p9pp"/>`,
		"fallback": "el:asterisk",
	});
}

export default Component;
