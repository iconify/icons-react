import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syy6vlbtq.css';

const viewBox = {"width":486.037,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syy6vlbtq"/>`,
		"fallback": "brandico:facebook",
	});
}

export default Component;
