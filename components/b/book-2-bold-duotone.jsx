import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdgjn765p.css';
import '../../css/g/gdwttsbnn.css';
import '../../css/q/qqtleebkg.css';
import '../../css/n/n-o51-mex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdgjn765p"/><path class="gdwttsbnn"/><path class="qqtleebkg"/><path class="n-o51-mex"/>`,
		"fallback": "solar:book-2-bold-duotone",
	});
}

export default Component;
