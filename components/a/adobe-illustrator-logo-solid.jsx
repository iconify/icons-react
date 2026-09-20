import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjn48nb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zjn48nb8i"/>`,
		"fallback": "streamline-logos:adobe-illustrator-logo-solid",
	});
}

export default Component;
