import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipkl84b6w.css';
import '../../css/o/odbzuac1h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipkl84b6w"/><path class="odbzuac1h"/>`,
		"fallback": "carbon:globe",
	});
}

export default Component;
