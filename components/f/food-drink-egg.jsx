import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlvw76bka.css';
import '../../css/u/uwlyphbtd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlvw76bka"/><path class="uwlyphbtd"/>`,
		"fallback": "streamline-pixel:food-drink-egg",
	});
}

export default Component;
