import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udf9libzz.css';
import '../../css/a/a8yx3tbzs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udf9libzz"/><path class="a8yx3tbzs"/>`,
		"fallback": "energy-icons:bread-48-bold",
	});
}

export default Component;
