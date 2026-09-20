import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o50glqbqr.css';
import '../../css/z/zglupmbmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o50glqbqr"/><path class="zglupmbmy"/>`,
		"fallback": "thesvg-color:assemblyai",
	});
}

export default Component;
