import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clmtl9q-a.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clmtl9q-a"/>`,
		"fallback": "jam:bar-chart",
	});
}

export default Component;
