import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poztdjbqd.css';
import '../../css/m/mxfuflb-o.css';
import '../../css/q/qd50ibxwv.css';
import '../../css/e/ehihs3tor.css';
import '../../css/y/yk-vagb6y.css';
import '../../css/z/zaiz7-mzb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs/><path class="poztdjbqd"/><path class="mxfuflb-o"/><path class="qd50ibxwv"/><path class="ehihs3tor"/><path class="yk-vagb6y"/><path class="zaiz7-mzb"/>`,
		"fallback": "carbon:contour-edit",
	});
}

export default Component;
