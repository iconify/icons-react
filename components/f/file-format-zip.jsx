import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1z-b7k0t.css';
import '../../css/g/gnb4snbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1z-b7k0t"/><path class="gnb4snbyn"/>`,
		"fallback": "lineicons:file-format-zip",
	});
}

export default Component;
