import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k14xmiymw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k14xmiymw"/>`,
		"fallback": "streamline-logos:deviant-art-logo-2",
	});
}

export default Component;
