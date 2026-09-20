import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al7hf0ijn.css';
import '../../css/p/p5oxreb1k.css';
import '../../css/q/qyivhdcvp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al7hf0ijn"/><path class="p5oxreb1k"/><path class="qyivhdcvp"/>`,
		"fallback": "oui:documentation",
	});
}

export default Component;
