import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ehtc2bcgg.css';
import '../../css/g/gvi6q-b4n.css';
import '../../css/f/f1wz-qb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ehtc2bcgg"/><path class="gvi6q-b4n"/><path class="f1wz-qb2t"/></g>`,
		"fallback": "tabler:hand-two-fingers",
	});
}

export default Component;
