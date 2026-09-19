import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9ui875ne.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9ui875ne"/>`,
		"fallback": "f7:cloud-bolt-rain-fill",
	});
}

export default Component;
