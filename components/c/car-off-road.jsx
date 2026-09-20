import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pge4smqvv.css';
import '../../css/n/ninqzwb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pge4smqvv"/><path class="ninqzwb5l"/></g>`,
		"fallback": "tabler:car-off-road",
	});
}

export default Component;
