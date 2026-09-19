import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtrqn2bnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtrqn2bnu"/>`,
		"fallback": "humbleicons:cog-2",
	});
}

export default Component;
