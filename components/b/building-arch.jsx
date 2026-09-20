import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x4vni6b4t.css';
import '../../css/e/eym2-shya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x4vni6b4t"/><path class="eym2-shya"/></g>`,
		"fallback": "tabler:building-arch",
	});
}

export default Component;
