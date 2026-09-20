import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf--c0vyf.css';
import '../../css/z/z72r2ab5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf--c0vyf"/><path class="z72r2ab5f"/>`,
		"fallback": "token:bitget",
	});
}

export default Component;
