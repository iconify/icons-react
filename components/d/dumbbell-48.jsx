import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjql9masp.css';
import '../../css/t/twciz0sfy.css';
import '../../css/b/b_kj4kkip.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjql9masp"/><path class="twciz0sfy"/><path class="b_kj4kkip"/>`,
		"fallback": "energy-icons:dumbbell-48",
	});
}

export default Component;
