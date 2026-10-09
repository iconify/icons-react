import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_xehnt6f.css';
import '../../css/z/zrbhk7b_w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_xehnt6f"/><path class="zrbhk7b_w"/>`,
		"fallback": "energy-icons:h2-molecule-20",
	});
}

export default Component;
