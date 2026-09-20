import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o14vgl1ja.css';
import '../../css/s/s_w1wxr_g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o14vgl1ja"/><path clip-rule="evenodd" class="s_w1wxr_g"/>`,
		"fallback": "qlementine-icons:info-16",
	});
}

export default Component;
