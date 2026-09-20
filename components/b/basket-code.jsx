import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/amw7zrb4t.css';
import '../../css/f/fe20_cbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="amw7zrb4t"/><path class="fe20_cbow"/></g>`,
		"fallback": "tabler:basket-code",
	});
}

export default Component;
