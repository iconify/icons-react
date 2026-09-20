import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq885o81f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nq885o81f"/>`,
		"fallback": "streamline-logos:feedly-logo-block",
	});
}

export default Component;
