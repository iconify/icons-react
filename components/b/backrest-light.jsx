import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtfw6nn5t.css';
import '../../css/a/a__hvdbzd.css';

const viewBox = {"width":1396.28,"height":387.95,"left":272.15,"top":648.13};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtfw6nn5t"/><path class="a__hvdbzd"/>`,
		"fallback": "thesvg-color:backrest-light",
	});
}

export default Component;
