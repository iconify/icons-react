import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbfhlu2aw.css';

const viewBox = {"width":1184,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbfhlu2aw"/>`,
		"fallback": "vs:baby",
	});
}

export default Component;
