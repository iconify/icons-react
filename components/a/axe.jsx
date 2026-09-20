import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgyr5-bhn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgyr5-bhn"/>`,
		"fallback": "pinhead:axe",
	});
}

export default Component;
