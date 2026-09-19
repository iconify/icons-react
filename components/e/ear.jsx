import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9sf3nbrj.css';
import '../../css/s/sp6-phchq.css';
import '../../css/g/g76tbfbxy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9sf3nbrj"/><path class="sp6-phchq"/><path class="g76tbfbxy"/>`,
		"fallback": "fxemoji:ear",
	});
}

export default Component;
