import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3lca2bsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3lca2bsv"/>`,
		"fallback": "keyline-icons:expand-dashed-up-right-box-sharp",
	});
}

export default Component;
