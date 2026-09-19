import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbokky-sc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbokky-sc"/>`,
		"fallback": "f7:cube-box",
	});
}

export default Component;
