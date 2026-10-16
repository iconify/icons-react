import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av2i24b1f.css';
import '../../css/i/ifjmab6ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av2i24b1f"/><path class="ifjmab6ox"/>`,
		"fallback": "energy-icons:extension-lead-20",
	});
}

export default Component;
