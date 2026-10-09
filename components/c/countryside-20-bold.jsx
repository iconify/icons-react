import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hseox7a5f.css';
import '../../css/r/rdbz-ccxi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hseox7a5f"/><path class="rdbz-ccxi"/>`,
		"fallback": "energy-icons:countryside-20-bold",
	});
}

export default Component;
