import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf-c3ibdw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf-c3ibdw"/>`,
		"fallback": "bi:file-music-fill",
	});
}

export default Component;
