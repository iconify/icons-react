import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcfumwk7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bcfumwk7h"/>`,
		"fallback": "streamline-sharp:gas-station-fuel-petroleum-remix",
	});
}

export default Component;
