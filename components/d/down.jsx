import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhe72p-0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhe72p-0a"/>`,
		"fallback": "grommet-icons:down",
	});
}

export default Component;
