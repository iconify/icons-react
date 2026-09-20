import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9997h4rm.css';
import '../../css/i/ineng-zmr.css';
import '../../css/q/qgh29tbpt.css';
import '../../css/o/of0z3gb9t.css';
import '../../css/i/ih7dl4x3y.css';
import '../../css/c/cwa8r9uhi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGopWTHdnm" class="b9997h4rm"/></defs><use href="#SVGopWTHdnm"/><path class="ineng-zmr"/><use href="#SVGopWTHdnm"/><path class="qgh29tbpt"/><circle class="of0z3gb9t"/><path class="ih7dl4x3y"/><path class="cwa8r9uhi"/>`,
		"fallback": "openmoji:anguished-face",
	});
}

export default Component;
