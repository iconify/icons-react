import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8hypz94q.css';
import '../../css/c/cedycybln.css';
import '../../css/w/w-dz0bcca.css';
import '../../css/p/ps1b3l81h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z8hypz94q"/><path class="cedycybln"/><path class="w-dz0bcca"/><path class="ps1b3l81h"/></g>`,
		"fallback": "streamline-ultimate-color:button-stop",
	});
}

export default Component;
