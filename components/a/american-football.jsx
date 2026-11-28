import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2i4e4bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2i4e4bwv"/>`,
		"fallback": "noviair:american-football",
	});
}

export default Component;
