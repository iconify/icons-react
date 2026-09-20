import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r61zubcbw.css';
import '../../css/x/xsmx0tbhg.css';
import '../../css/t/t0b5xqyha.css';
import '../../css/v/v4gzgfbbi.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r61zubcbw"/><path class="xsmx0tbhg"/><path class="t0b5xqyha"/><path class="v4gzgfbbi"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:demisexual",
	});
}

export default Component;
