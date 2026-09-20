import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/adi0c0k1r.css';
import '../../css/g/gvi6q-b4n.css';
import '../../css/a/aaly64bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="adi0c0k1r"/><path class="gvi6q-b4n"/><path class="aaly64bvj"/></g>`,
		"fallback": "tabler:hand-ring-finger",
	});
}

export default Component;
