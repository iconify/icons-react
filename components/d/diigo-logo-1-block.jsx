import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl_azmknv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jl_azmknv"/>`,
		"fallback": "streamline-logos:diigo-logo-1-block",
	});
}

export default Component;
