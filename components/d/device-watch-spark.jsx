import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzapgwpcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzapgwpcx"/>`,
		"fallback": "tabler:device-watch-spark",
	});
}

export default Component;
