import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is3doibbp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="is3doibbp"/>`,
		"fallback": "devicon-plain:harvester-wordmark",
	});
}

export default Component;
