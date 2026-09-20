import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfxbv640g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfxbv640g"/>`,
		"fallback": "tabler:eyeglass-off",
	});
}

export default Component;
