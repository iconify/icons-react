import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkagcqbna.css';
import '../../css/v/ve2i1gbcg.css';
import '../../css/y/ydksjga1d.css';
import '../../css/s/sxwqent6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkagcqbna"/><path clip-rule="evenodd" class="ve2i1gbcg"/><path class="ydksjga1d"/><path class="sxwqent6y"/>`,
		"fallback": "solar:flash-drive-bold-duotone",
	});
}

export default Component;
