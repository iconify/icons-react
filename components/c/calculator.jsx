import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcx7mn54s.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcx7mn54s"/>`,
		"fallback": "jam:calculator",
	});
}

export default Component;
