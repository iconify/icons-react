import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/z/zcwp9kj6u.css';
import '../../css/m/mji35ib1z.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgEiWwdQX"><g class="ukm9jj2re"><path class="zcwp9kj6u"/><path class="mji35ib1z"/></g></mask></defs><path mask="url(#SVGgEiWwdQX)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:folder-del-duotone-line",
	});
}

export default Component;
