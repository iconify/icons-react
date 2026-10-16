import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyuwl4bpc.css';
import '../../css/m/m2qyafbre.css';
import '../../css/z/zi0m9n48q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyuwl4bpc"/><path class="m2qyafbre"/><path class="zi0m9n48q"/>`,
		"fallback": "energy-icons:elevator-20",
	});
}

export default Component;
