import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/m/mji35ib1z.css';
import '../../css/f/f1vwfqbhe.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZ8zPDckf"><g class="ukm9jj2re"><path class="mji35ib1z"/><path class="f1vwfqbhe"/></g></mask></defs><path mask="url(#SVGZ8zPDckf)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-add-duotone-line",
	});
}

export default Component;
