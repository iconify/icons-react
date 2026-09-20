import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8xequ2kf.css';
import '../../css/i/ineng-zmr.css';
import '../../css/l/lcykpmw0z.css';
import '../../css/o/osvg_sb1z.css';
import '../../css/o/of0z3gb9t.css';
import '../../css/x/xbjbpobcc.css';
import '../../css/c/cwa8r9uhi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGbU4bPbLA" class="i8xequ2kf"/></defs><use href="#SVGbU4bPbLA"/><path class="ineng-zmr"/><path class="lcykpmw0z"/><use href="#SVGbU4bPbLA"/><path class="osvg_sb1z"/><circle class="of0z3gb9t"/><path class="xbjbpobcc"/><path class="cwa8r9uhi"/>`,
		"fallback": "openmoji:fearful-face",
	});
}

export default Component;
