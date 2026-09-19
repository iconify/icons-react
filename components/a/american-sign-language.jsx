import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5bkkdzxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5bkkdzxg"/>`,
		"fallback": "healthicons:american-sign-language",
	});
}

export default Component;
