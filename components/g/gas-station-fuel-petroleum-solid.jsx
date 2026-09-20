import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v907xfxmd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v907xfxmd"/>`,
		"fallback": "streamline-flex:gas-station-fuel-petroleum-solid",
	});
}

export default Component;
