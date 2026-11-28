import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3dfkrlyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3dfkrlyh"/>`,
		"fallback": "noviair-light:app-window-check",
	});
}

export default Component;
