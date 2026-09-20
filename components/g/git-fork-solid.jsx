import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec2m1t97f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec2m1t97f"/>`,
		"fallback": "teenyicons:git-fork-solid",
	});
}

export default Component;
