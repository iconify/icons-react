import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju2t91bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ju2t91bal"/>`,
		"fallback": "streamline-sharp:bug-virus-browser-solid",
	});
}

export default Component;
