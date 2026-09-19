import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlvth03fq.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlvth03fq"/>`,
		"fallback": "academicons:archive-square",
	});
}

export default Component;
