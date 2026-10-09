import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5f709d9b.css';
import '../../css/v/v_nkltqwk.css';
import '../../css/s/s4l69nb0w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5f709d9b"/><path class="v_nkltqwk"/><path class="s4l69nb0w"/>`,
		"fallback": "energy-icons:ammeter-20-bold",
	});
}

export default Component;
