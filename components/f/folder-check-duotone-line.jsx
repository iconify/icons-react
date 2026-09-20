import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/g/gjvd0pbej.css';
import '../../css/m/mj2qzeess.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYKI6njLI"><g class="ukm9jj2re"><path class="gjvd0pbej"/><path class="mj2qzeess"/></g></mask></defs><path mask="url(#SVGYKI6njLI)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-check-duotone-line",
	});
}

export default Component;
