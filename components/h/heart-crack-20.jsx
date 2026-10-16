import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssxuq6bep.css';
import '../../css/i/i6mqdtdir.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssxuq6bep"/><path class="i6mqdtdir"/>`,
		"fallback": "energy-icons:heart-crack-20",
	});
}

export default Component;
