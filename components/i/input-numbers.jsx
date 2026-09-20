import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dluanabqy.css';
import '../../css/n/naeprdbjc.css';
import '../../css/a/abc-_riwo.css';
import '../../css/x/xrvzlggpv.css';
import '../../css/g/gxucjjbuw.css';
import '../../css/c/cfrb6cbcz.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dluanabqy"/><path class="naeprdbjc"/><path class="abc-_riwo"/><path class="xrvzlggpv"/><path class="gxucjjbuw"/><path class="cfrb6cbcz"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:input-numbers",
	});
}

export default Component;
