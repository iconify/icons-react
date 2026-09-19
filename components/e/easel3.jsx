import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqv60rbne.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqv60rbne"/>`,
		"fallback": "bi:easel3",
	});
}

export default Component;
