import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as0sge_bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as0sge_bw"/>`,
		"fallback": "boxicons:git-compare-filled",
	});
}

export default Component;
