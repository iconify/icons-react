import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsrb3dbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dsrb3dbkn"/>`,
		"fallback": "streamline-sharp:download-stack-solid",
	});
}

export default Component;
