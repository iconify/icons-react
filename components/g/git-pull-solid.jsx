import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pztpj7b0o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pztpj7b0o"/>`,
		"fallback": "teenyicons:git-pull-solid",
	});
}

export default Component;
