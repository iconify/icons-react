import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6gqzxb4d.css';
import '../../css/e/e8oivg3hw.css';
import '../../css/v/vmbns7bhy.css';
import '../../css/j/jplfpxb-u.css';
import '../../css/i/iqo6p--2e.css';
import '../../css/y/y6xdyyo0r.css';
import '../../css/d/dr6wymz9r.css';
import '../../css/q/qvotekphz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6gqzxb4d"/><path class="e8oivg3hw"/><circle class="vmbns7bhy"/><circle class="jplfpxb-u"/><circle class="iqo6p--2e"/><circle class="y6xdyyo0r"/><path class="dr6wymz9r"/><path class="qvotekphz"/>`,
		"fallback": "carbon:game-wireless",
	});
}

export default Component;
