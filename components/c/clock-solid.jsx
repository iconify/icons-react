import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2otw27pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u2otw27pl"/>`,
		"fallback": "basil:clock-solid",
	});
}

export default Component;
