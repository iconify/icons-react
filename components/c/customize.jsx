import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egs57ly1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egs57ly1d"/>`,
		"fallback": "gridicons:customize",
	});
}

export default Component;
