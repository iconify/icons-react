import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdxk5xbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdxk5xbmf"/>`,
		"fallback": "reicon:clapperboard-open-filled",
	});
}

export default Component;
