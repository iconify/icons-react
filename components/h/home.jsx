import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgu1w2bgg.css';

const viewBox = {"width":512,"height":528};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgu1w2bgg"/>`,
		"fallback": "ps:home",
	});
}

export default Component;
