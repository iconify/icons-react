import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu6oghb0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu6oghb0j"/>`,
		"fallback": "game-icons:dice-twenty-faces-one",
	});
}

export default Component;
