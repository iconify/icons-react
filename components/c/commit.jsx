import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz4fx2blg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz4fx2blg"/>`,
		"fallback": "eos-icons:commit",
	});
}

export default Component;
