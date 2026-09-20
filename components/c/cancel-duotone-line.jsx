import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/j/jaetm0bkr.css';
import '../../css/e/euzbmmb6o.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGifujUciD"><g class="ukm9jj2re"><circle class="jaetm0bkr"/><path class="euzbmmb6o"/></g></mask></defs><path mask="url(#SVGifujUciD)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:cancel-duotone-line",
	});
}

export default Component;
