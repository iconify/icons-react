import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k63mzac7p.css';
import '../../css/a/atm2gfkao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k63mzac7p"/><path class="atm2gfkao"/>`,
		"fallback": "streamline-plump:hotel-bed-5-solid",
	});
}

export default Component;
