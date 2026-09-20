import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8b-edbtq.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8b-edbtq"/>`,
		"fallback": "wi:earthquake",
	});
}

export default Component;
