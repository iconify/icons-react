import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3ugng94a.css';
import '../../css/d/dcz5ovbjt.css';
import '../../css/k/kyml_y7yk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3ugng94a"/><path class="dcz5ovbjt"/><path class="kyml_y7yk"/>`,
		"fallback": "catppuccin:folder-linux",
	});
}

export default Component;
