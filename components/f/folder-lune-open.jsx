import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i12ji_bzg.css';
import '../../css/v/vzih_tb-s.css';
import '../../css/r/rn06_bbzy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i12ji_bzg"/><path class="vzih_tb-s"/><path class="rn06_bbzy"/>`,
		"fallback": "catppuccin:folder-lune-open",
	});
}

export default Component;
