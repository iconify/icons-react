import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvunxq2rg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvunxq2rg"/>`,
		"fallback": "game-icons:dice-six-faces-one",
	});
}

export default Component;
