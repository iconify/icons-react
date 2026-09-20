import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgb2efl3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hgb2efl3w"/>`,
		"fallback": "streamline-sharp:hide-layer-remix",
	});
}

export default Component;
