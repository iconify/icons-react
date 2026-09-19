import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pemwhqbvz.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pemwhqbvz"/>`,
		"fallback": "ps:icq",
	});
}

export default Component;
