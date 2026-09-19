import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1we_sbru.css';
import '../../css/w/wo3zs2b-t.css';
import '../../css/j/j06su1bbr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1we_sbru"/><path class="wo3zs2b-t"/><path class="j06su1bbr"/>`,
		"fallback": "formkit:file",
	});
}

export default Component;
