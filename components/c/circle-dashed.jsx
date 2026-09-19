import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg8dgjblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg8dgjblg"/>`,
		"fallback": "hugeicons:circle-dashed",
	});
}

export default Component;
