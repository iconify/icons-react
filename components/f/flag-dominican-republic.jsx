import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/n/nf5vx2b-m.css';
import '../../css/e/eyggrbfpz.css';
import '../../css/n/n617plbfy.css';
import '../../css/r/rckncsljp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="nf5vx2b-m"/><path class="eyggrbfpz"/><path class="n617plbfy"/><circle class="rckncsljp"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-dominican-republic",
	});
}

export default Component;
