import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j00ef2i9a.css';
import '../../css/v/vje10cmgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j00ef2i9a"/><path class="vje10cmgc"/>`,
		"fallback": "tdesign:activity-filled",
	});
}

export default Component;
