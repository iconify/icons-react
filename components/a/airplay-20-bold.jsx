import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix3svnbbt.css';
import '../../css/g/gj1g8xb8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix3svnbbt"/><path class="gj1g8xb8y"/>`,
		"fallback": "energy-icons:airplay-20-bold",
	});
}

export default Component;
