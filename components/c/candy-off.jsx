import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2o213vhp.css';
import '../../css/z/z362ur8tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g2o213vhp"/><path class="z362ur8tb"/></g>`,
		"fallback": "tabler:candy-off",
	});
}

export default Component;
