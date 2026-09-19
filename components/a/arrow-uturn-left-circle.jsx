import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_lzzqf7t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_lzzqf7t"/>`,
		"fallback": "f7:arrow-uturn-left-circle",
	});
}

export default Component;
