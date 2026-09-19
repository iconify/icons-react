import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rokf6mb-k.css';
import '../../css/r/r875-hb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rokf6mb-k"/><path clip-rule="evenodd" class="r875-hb5i"/>`,
		"fallback": "cuida:arrow-right-outline",
	});
}

export default Component;
