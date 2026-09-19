import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-vwe2b6w.css';
import '../../css/f/fzp2tmx2o.css';
import '../../css/a/a6-7rqb6n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-vwe2b6w"/><path class="fzp2tmx2o"/><path class="a6-7rqb6n"/>`,
		"fallback": "devicon:bevyengine",
	});
}

export default Component;
