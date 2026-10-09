import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhknbhbfu.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/o/owu6fcc5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhknbhbfu"/><path class="c65-ehvfy"/><path class="owu6fcc5e"/>`,
		"fallback": "energy-icons:furnace-48",
	});
}

export default Component;
