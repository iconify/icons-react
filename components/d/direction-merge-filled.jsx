import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldjgpjbom.css';
import '../../css/c/chq_v_ohg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldjgpjbom"/><path class="chq_v_ohg"/>`,
		"fallback": "carbon:direction-merge-filled",
	});
}

export default Component;
