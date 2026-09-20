import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r36e_8bxp.css';
import '../../css/m/mfr2nesuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r36e_8bxp"/><path class="mfr2nesuy"/>`,
		"fallback": "tdesign:browse-off-filled",
	});
}

export default Component;
