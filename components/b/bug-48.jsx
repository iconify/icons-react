import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da3bf5bbj.css';
import '../../css/g/gtz69mu0i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da3bf5bbj"/><path class="gtz69mu0i"/>`,
		"fallback": "energy-icons:bug-48",
	});
}

export default Component;
