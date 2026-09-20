import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq6pttbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fq6pttbzq"/>`,
		"fallback": "streamline-logos:diigo-logo-3-solid",
	});
}

export default Component;
