import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nmlhygb4s.css';
import '../../css/g/gxnnybbyt.css';
import '../../css/s/sduaog7rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nmlhygb4s"/><path class="gxnnybbyt"/><path class="sduaog7rg"/></g>`,
		"fallback": "tabler:bus-stop",
	});
}

export default Component;
