import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skehb9b_e.css';
import '../../css/v/v9_061blr.css';
import '../../css/p/ptx8jiyoi.css';
import '../../css/r/r8y5pebry.css';
import '../../css/b/bq5-wbb3q.css';
import '../../css/e/e2k5-xbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="skehb9b_e"/><path class="v9_061blr"/><path class="ptx8jiyoi"/><path clip-rule="evenodd" class="r8y5pebry"/><path clip-rule="evenodd" class="bq5-wbb3q"/><path clip-rule="evenodd" class="e2k5-xbuv"/>`,
		"fallback": "lineicons:diners-club",
	});
}

export default Component;
