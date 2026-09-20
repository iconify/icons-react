import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rndfumw7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rndfumw7h"/>`,
		"fallback": "streamline-logos:bootstrap-logo-solid",
	});
}

export default Component;
