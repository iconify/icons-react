import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z9vq6pbbz.css';
import '../../css/m/md286fbip.css';
import '../../css/x/xu6usccqt.css';
import '../../css/b/b5lcdgb3h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="z9vq6pbbz"/><g class="md286fbip"><path class="xu6usccqt"/><path class="b5lcdgb3h"/></g></g>`,
		"fallback": "cryptocurrency-color:block",
	});
}

export default Component;
