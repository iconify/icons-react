import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2y83v_tt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2y83v_tt"/>`,
		"fallback": "streamline-plump:book-1-remix",
	});
}

export default Component;
