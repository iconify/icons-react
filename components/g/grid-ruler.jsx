import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y50-e9bsi.css';
import '../../css/i/i2s29ccsd.css';
import '../../css/j/jzlsh2blz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y50-e9bsi"/><path class="i2s29ccsd"/><path class="jzlsh2blz"/>`,
		"fallback": "streamline-freehand:grid-ruler",
	});
}

export default Component;
