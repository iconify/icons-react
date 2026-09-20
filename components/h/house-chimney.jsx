import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmelscxim.css';
import '../../css/f/fr2o6d1gz.css';
import '../../css/b/bxyy2ccnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmelscxim"/><path class="fr2o6d1gz"/><path class="bxyy2ccnm"/></g>`,
		"fallback": "streamline-ultimate-color:house-chimney",
	});
}

export default Component;
