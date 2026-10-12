import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6p9yrlgi.css';
import '../../css/q/qhp5hjzez.css';
import '../../css/j/jt8rybcvz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6p9yrlgi"/><path class="qhp5hjzez"/><path class="jt8rybcvz"/>`,
		"fallback": "garden:chain-20",
	});
}

export default Component;
