import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6p28il0s.css';
import '../../css/f/f4res6apk.css';
import '../../css/i/i9m88b5ko.css';
import '../../css/x/xyvq88qxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h6p28il0s"/><path class="f4res6apk"/><path class="i9m88b5ko"/><path class="xyvq88qxl"/></g>`,
		"fallback": "tabler:chart-radar",
	});
}

export default Component;
