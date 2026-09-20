import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np1ww71-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="np1ww71-n"/>`,
		"fallback": "streamline-sharp:fork-plate-solid",
	});
}

export default Component;
