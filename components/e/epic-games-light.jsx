import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq1nlq5hz.css';

const viewBox = {"width":25.548,"height":29.501,"left":3.227,"top":1.25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq1nlq5hz"/>`,
		"fallback": "thesvg-color:epic-games-light",
	});
}

export default Component;
