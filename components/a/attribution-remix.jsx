import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/absnrrb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="absnrrb5j"/>`,
		"fallback": "streamline-sharp:attribution-remix",
	});
}

export default Component;
