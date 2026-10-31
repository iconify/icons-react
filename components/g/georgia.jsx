import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmibc4bxr.css';
import '../../css/m/m90b07a8p.css';
import '../../css/j/jm4p79bio.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmibc4bxr"/><path class="m90b07a8p"/><path class="jm4p79bio"/>`,
		"fallback": "tabler-flags:georgia",
	});
}

export default Component;
