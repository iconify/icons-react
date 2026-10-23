import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx5u0jbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx5u0jbku"/>`,
		"fallback": "vadivam:git-pull-request",
	});
}

export default Component;
