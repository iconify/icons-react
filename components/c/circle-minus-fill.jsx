import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhku4kbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lhku4kbyv"/>`,
		"fallback": "keyline-icons:circle-minus-fill",
	});
}

export default Component;
