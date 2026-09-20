import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/q/q0ouhhhum.css';
import '../../css/r/r73utib8z.css';
import '../../css/m/m4a18dtgb.css';
import '../../css/o/oo9m_4btn.css';
import '../../css/d/d759ooqqy.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="q0ouhhhum"/><path class="r73utib8z"/><path class="m4a18dtgb"/><path class="oo9m_4btn"/><path class="d759ooqqy"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-iran",
	});
}

export default Component;
