import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gndrgobtu.css';
import '../../css/v/vagvi2bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gndrgobtu"/><path class="vagvi2bms"/>`,
		"fallback": "streamline-ultimate:bookmarks-document-alternate-bold",
	});
}

export default Component;
