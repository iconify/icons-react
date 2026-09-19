import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfqbr2bgd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mfqbr2bgd"/>`,
		"fallback": "gravity-ui:circle-dashed",
	});
}

export default Component;
