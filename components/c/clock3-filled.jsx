import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl_omuber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl_omuber"/>`,
		"fallback": "reicon:clock3-filled",
	});
}

export default Component;
