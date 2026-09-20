import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc2cz1enc.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc2cz1enc"/>`,
		"fallback": "picon:anvil",
	});
}

export default Component;
