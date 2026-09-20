import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty_ooxbvp.css';
import '../../css/f/ffappobrr.css';
import '../../css/u/uzprxqbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ty_ooxbvp"/><circle class="ffappobrr"/><circle class="uzprxqbmf"/>`,
		"fallback": "prime:ellipsis-h",
	});
}

export default Component;
