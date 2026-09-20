import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txdk-rk8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txdk-rk8y"/>`,
		"fallback": "tabler:brand-databricks",
	});
}

export default Component;
