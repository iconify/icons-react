import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlpzi9wwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rlpzi9wwx"/>`,
		"fallback": "streamline-sharp:asterisk-square-solid",
	});
}

export default Component;
