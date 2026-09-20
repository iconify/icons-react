import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvmtwcbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvmtwcbsh"/>`,
		"fallback": "tabler:currency-dollar-zimbabwean",
	});
}

export default Component;
