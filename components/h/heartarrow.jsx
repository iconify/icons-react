import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9tdqxbog.css';
import '../../css/x/xu78x0bzx.css';
import '../../css/w/wyq5_pmvv.css';
import '../../css/b/bucljsrcf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9tdqxbog"/><path class="xu78x0bzx"/><path class="wyq5_pmvv"/><path class="bucljsrcf"/>`,
		"fallback": "fxemoji:heartarrow",
	});
}

export default Component;
