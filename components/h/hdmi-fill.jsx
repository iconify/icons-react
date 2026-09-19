import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkvh7sutk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkvh7sutk"/>`,
		"fallback": "bi:hdmi-fill",
	});
}

export default Component;
