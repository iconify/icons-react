import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg-zqtbkr.css';
import '../../css/l/lpmi47w6s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg-zqtbkr"/><path clip-rule="evenodd" class="lpmi47w6s"/>`,
		"fallback": "streamline-plump:auto-flash-solid",
	});
}

export default Component;
