import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-29-dopm.css';
import '../../css/o/okgd0ab2p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="z-29-dopm"/><path class="okgd0ab2p"/>`,
		"fallback": "material-icon-theme:huff-light",
	});
}

export default Component;
