import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuqbiy8fo.css';
import '../../css/z/z0k1ug9bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuqbiy8fo"/><path class="z0k1ug9bx"/>`,
		"fallback": "bx:cabinet",
	});
}

export default Component;
