import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-3qc_bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-3qc_bhv"/>`,
		"fallback": "streamline-logos:flutter-logo-block",
	});
}

export default Component;
