import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbhx33-fu.css';
import '../../css/i/iy9nx5bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbhx33-fu"/><path class="iy9nx5bhw"/>`,
		"fallback": "streamline-freehand:business-coaching-idea-jigsaw",
	});
}

export default Component;
