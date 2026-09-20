import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-h81epps.css';
import '../../css/r/rn56kzbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-h81epps"/><path class="rn56kzbis"/></g>`,
		"fallback": "tabler:automatic-gearbox",
	});
}

export default Component;
