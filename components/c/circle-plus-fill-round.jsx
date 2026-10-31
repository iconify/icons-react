import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz98x5bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz98x5bxg"/>`,
		"fallback": "coolicons:circle-plus-fill-round",
	});
}

export default Component;
