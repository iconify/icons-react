import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnh7u9f3r.css';
import '../../css/t/t0uauacth.css';
import '../../css/j/jnh3n5bgw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnh7u9f3r"/><path class="t0uauacth"/><path class="jnh3n5bgw"/>`,
		"fallback": "catppuccin:gleam-config",
	});
}

export default Component;
