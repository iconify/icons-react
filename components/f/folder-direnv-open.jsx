import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1crshb5u.css';
import '../../css/b/byrocu6aw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1crshb5u"/><path class="byrocu6aw"/>`,
		"fallback": "catppuccin:folder-direnv-open",
	});
}

export default Component;
