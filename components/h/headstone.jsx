import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-av3_bit.css';
import '../../css/r/r4_7jcbgs.css';
import '../../css/p/pc7f2vb6i.css';
import '../../css/o/oflaz1bix.css';
import '../../css/j/jcyo4yvaz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-av3_bit"/><path class="r4_7jcbgs"/><path class="pc7f2vb6i"/><path class="oflaz1bix"/><path class="jcyo4yvaz"/>`,
		"fallback": "openmoji:headstone",
	});
}

export default Component;
