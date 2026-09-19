import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqhpheb8j.css';

const viewBox = {"width":774,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqhpheb8j"/>`,
		"fallback": "fontelico:emo-wink2",
	});
}

export default Component;
