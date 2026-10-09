import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9dzyiszx.css';
import '../../css/g/g8-7we8zc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9dzyiszx"/><path class="g8-7we8zc"/>`,
		"fallback": "energy-icons:bolt-check-20",
	});
}

export default Component;
