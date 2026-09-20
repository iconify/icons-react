import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acbpa8b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="acbpa8b4i"/>`,
		"fallback": "streamline-sharp:hydro-energy-remix",
	});
}

export default Component;
