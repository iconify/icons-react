import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0dbqj1gj.css';
import '../../css/i/io85o8bhu.css';
import '../../css/n/ngq3jibfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0dbqj1gj"/><path class="io85o8bhu"/><path class="ngq3jibfy"/>`,
		"fallback": "energy-icons:elevator-48-bold",
	});
}

export default Component;
