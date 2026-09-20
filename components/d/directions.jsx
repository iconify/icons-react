import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h35seqbyn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h35seqbyn"/>`,
		"fallback": "simple-line-icons:directions",
	});
}

export default Component;
