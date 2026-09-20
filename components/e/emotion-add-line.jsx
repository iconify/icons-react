import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kepsv4b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kepsv4b0b"/>`,
		"fallback": "ri:emotion-add-line",
	});
}

export default Component;
