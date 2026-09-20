import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izue1acve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="izue1acve"/>`,
		"fallback": "streamline-plump:ai-edit-robot-remix",
	});
}

export default Component;
