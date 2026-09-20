import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6v9hcbnp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b6v9hcbnp"/>`,
		"fallback": "streamline-plump:calendar-note-remix",
	});
}

export default Component;
