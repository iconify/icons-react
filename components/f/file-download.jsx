import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0crd8bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0crd8bzj"/>`,
		"fallback": "tdesign:file-download",
	});
}

export default Component;
