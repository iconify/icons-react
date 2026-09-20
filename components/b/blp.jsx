import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvilz5bul.css';
import '../../css/g/gioqhbc1k.css';
import '../../css/f/fvy7yglnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvilz5bul"/><path class="gioqhbc1k"/><path class="fvy7yglnw"/>`,
		"fallback": "token:blp",
	});
}

export default Component;
