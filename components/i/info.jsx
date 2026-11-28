import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa3v6eogt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa3v6eogt"/>`,
		"fallback": "noviair-light:info",
	});
}

export default Component;
