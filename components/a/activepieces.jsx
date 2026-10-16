import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb6hxoxix.css';

const viewBox = {"width":22,"height":19};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb6hxoxix"/>`,
		"fallback": "thesvg-color:activepieces",
	});
}

export default Component;
