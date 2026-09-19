import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw_iljm_j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw_iljm_j"/>`,
		"fallback": "icomoon-free:checkbox-unchecked",
	});
}

export default Component;
