import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6fooktbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6fooktbo"/>`,
		"fallback": "game-icons:basset-hound-head",
	});
}

export default Component;
