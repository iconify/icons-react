import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waxqflb-o.css';
import '../../css/m/mfaduwb-f.css';
import '../../css/f/fu23s4b3q.css';
import '../../css/x/x90g5f2cs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waxqflb-o"/><path class="mfaduwb-f"/><path class="fu23s4b3q"/><path class="x90g5f2cs"/>`,
		"fallback": "energy-icons:cable-tester-20",
	});
}

export default Component;
