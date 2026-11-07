import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zenyhg4uf.css';
import '../../css/w/wljgqrbai.css';
import '../../css/s/suoyyrb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zenyhg4uf"/><path class="wljgqrbai"/><path class="suoyyrb8y"/>`,
		"fallback": "solar:crop-minimalistic-bold-duotone",
	});
}

export default Component;
