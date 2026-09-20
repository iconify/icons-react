import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz2u3n6qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xz2u3n6qt"/>`,
		"fallback": "streamline-sharp:cyborg-solid",
	});
}

export default Component;
