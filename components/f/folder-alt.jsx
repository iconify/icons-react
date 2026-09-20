import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/c/crhqw7b7l.css';
import '../../css/g/g048xd03g.css';
import '../../css/e/e0hfau-no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="crhqw7b7l"/><path class="g048xd03g"/><path class="e0hfau-no"/></g>`,
		"fallback": "lets-icons:folder-alt",
	});
}

export default Component;
