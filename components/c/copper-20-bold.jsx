import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkwxxqb3q.css';
import '../../css/f/f6w9iq-hg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkwxxqb3q"/><path class="f6w9iq-hg"/>`,
		"fallback": "energy-icons:copper-20-bold",
	});
}

export default Component;
