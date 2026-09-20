import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fk5bzrb7k.css';
import '../../css/e/e6_vovbrk.css';
import '../../css/e/e9qzyqbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fk5bzrb7k"/><path class="e6_vovbrk"/><path class="e9qzyqbdk"/></g>`,
		"fallback": "streamline-cyber-color:account",
	});
}

export default Component;
