import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qql3zx4xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qql3zx4xy"/>`,
		"fallback": "streamline-sharp:graphic-template-website-ui-solid",
	});
}

export default Component;
