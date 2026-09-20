import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgqhybb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xgqhybb4k"/>`,
		"fallback": "streamline-freehand:collaboration-meeting-team-file",
	});
}

export default Component;
