import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jknxtgxtf.css';
import '../../css/x/xf60uybiq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jknxtgxtf"/><path class="xf60uybiq"/>`,
		"fallback": "catppuccin:folder-cargo-open",
	});
}

export default Component;
