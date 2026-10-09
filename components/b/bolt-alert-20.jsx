import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9dzyiszx.css';
import '../../css/q/qz4brhaoj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9dzyiszx"/><path class="qz4brhaoj"/>`,
		"fallback": "energy-icons:bolt-alert-20",
	});
}

export default Component;
