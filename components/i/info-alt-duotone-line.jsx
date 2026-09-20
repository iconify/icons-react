import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/au1n8dbha.css';
import '../../css/b/bl5u9pbem.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbAVoR3ri"><g class="ft5dv1b6b"><path class="au1n8dbha"/><path class="bl5u9pbem"/></g></mask></defs><path mask="url(#SVGbAVoR3ri)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:info-alt-duotone-line",
	});
}

export default Component;
