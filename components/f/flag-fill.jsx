import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnaft7gra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnaft7gra"/>`,
		"fallback": "prime:flag-fill",
	});
}

export default Component;
