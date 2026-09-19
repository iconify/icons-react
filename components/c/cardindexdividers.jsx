import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbhakgbzs.css';
import '../../css/o/oja5rwz9i.css';
import '../../css/l/l36n89b8l.css';
import '../../css/u/u9th8bbss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbhakgbzs"/><path class="oja5rwz9i"/><path class="l36n89b8l"/><path class="u9th8bbss"/>`,
		"fallback": "fxemoji:cardindexdividers",
	});
}

export default Component;
