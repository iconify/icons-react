import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/a/a7npbebsm.css';
import '../../css/y/yhmv9f00n.css';
import '../../css/y/y08z3db8a.css';
import '../../css/g/gqe7as18i.css';
import '../../css/a/a_3e9ebsi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="a7npbebsm"/><path class="yhmv9f00n"/><path class="y08z3db8a"/><path class="gqe7as18i"/><path class="a_3e9ebsi"/></g>`,
		"fallback": "streamline-flex:blood-donate-drop",
	});
}

export default Component;
