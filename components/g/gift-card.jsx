import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjv3jqbyi.css';
import '../../css/q/qylci8b3v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjv3jqbyi"/><path class="qylci8b3v"/>`,
		"fallback": "nimbus:gift-card",
	});
}

export default Component;
