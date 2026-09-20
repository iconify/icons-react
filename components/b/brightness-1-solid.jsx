import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m43v59bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m43v59bwt"/>`,
		"fallback": "streamline-sharp:brightness-1-solid",
	});
}

export default Component;
