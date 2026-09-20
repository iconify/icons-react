import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7w6s7b2e.css';
import '../../css/v/v5pqt5bwd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b7w6s7b2e"/><path class="v5pqt5bwd"/>`,
		"fallback": "qlementine-icons:call-missed-16",
	});
}

export default Component;
