import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvi257b1u.css';
import '../../css/k/kyxjq5b8z.css';
import '../../css/p/p_1scj-cu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvi257b1u"/><path class="kyxjq5b8z"/><path class="p_1scj-cu"/>`,
		"fallback": "nimbus:cog",
	});
}

export default Component;
