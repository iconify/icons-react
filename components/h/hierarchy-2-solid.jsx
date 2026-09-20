import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfw-_u3sc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfw-_u3sc"/>`,
		"fallback": "streamline-sharp:hierarchy-2-solid",
	});
}

export default Component;
