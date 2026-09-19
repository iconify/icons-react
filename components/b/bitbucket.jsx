import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of9xrlbih.css';

const viewBox = {"width":1440,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of9xrlbih"/>`,
		"fallback": "fa:bitbucket",
	});
}

export default Component;
