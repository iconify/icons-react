import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pphwdzbsq.css';
import '../../css/j/jxqbrew3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pphwdzbsq"/><path class="jxqbrew3y"/>`,
		"fallback": "selfhst:hawser-dark",
	});
}

export default Component;
