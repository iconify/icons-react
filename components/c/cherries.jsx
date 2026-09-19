import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4iv2nveq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4iv2nveq"/>`,
		"fallback": "dinkie-icons:cherries",
	});
}

export default Component;
