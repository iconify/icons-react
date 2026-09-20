import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbo1m_b5j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbo1m_b5j"/>`,
		"fallback": "rivet-icons:inbox",
	});
}

export default Component;
