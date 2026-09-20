import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj334wbso.css';

const viewBox = {"width":25.548,"height":29.501,"left":3.227,"top":1.25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj334wbso"/>`,
		"fallback": "thesvg-color:epic-games-dark",
	});
}

export default Component;
