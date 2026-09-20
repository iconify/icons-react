import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfqbr3bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfqbr3bdu"/>`,
		"fallback": "keyline-icons:git-x-sharp",
	});
}

export default Component;
