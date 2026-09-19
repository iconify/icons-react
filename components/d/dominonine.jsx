import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcc4fsl0p.css';

const viewBox = {"width":961,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcc4fsl0p"/>`,
		"fallback": "whh:dominonine",
	});
}

export default Component;
