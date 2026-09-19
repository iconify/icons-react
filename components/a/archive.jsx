import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka3_2sueq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka3_2sueq"/>`,
		"fallback": "academicons:archive",
	});
}

export default Component;
