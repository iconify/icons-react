import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5skcqr-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5skcqr-j"/>`,
		"fallback": "streamline-sharp:inbox-favorite-solid",
	});
}

export default Component;
