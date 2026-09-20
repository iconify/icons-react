import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cprchxb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cprchxb8f"/>`,
		"fallback": "streamline-sharp:bag-suitcase-add-plus-solid",
	});
}

export default Component;
