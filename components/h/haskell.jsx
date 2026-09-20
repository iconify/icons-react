import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad53olvua.css';
import '../../css/z/zenn7i8an.css';
import '../../css/b/bi4q1fb5h.css';
import '../../css/d/dznxpfe5t.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ad53olvua"><path class="zenn7i8an"/><path class="bi4q1fb5h"/><path class="dznxpfe5t"/></g>`,
		"fallback": "material-icon-theme:haskell",
	});
}

export default Component;
