import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui6f1wb4w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui6f1wb4w"/>`,
		"fallback": "famicons:folder-outline",
	});
}

export default Component;
