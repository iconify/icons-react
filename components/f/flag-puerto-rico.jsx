import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/q/qohud7bbt.css';
import '../../css/m/mwl13xblr.css';
import '../../css/c/c111f0qvj.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="qohud7bbt"/><path class="mwl13xblr"/><path class="c111f0qvj"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-puerto-rico",
	});
}

export default Component;
