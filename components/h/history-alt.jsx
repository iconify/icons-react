import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ful0qxhpy.css';
import '../../css/r/r-fuctb7v.css';
import '../../css/z/z-iafr_mu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ful0qxhpy"/><path class="r-fuctb7v"/><path class="z-iafr_mu"/>`,
		"fallback": "uim:history-alt",
	});
}

export default Component;
