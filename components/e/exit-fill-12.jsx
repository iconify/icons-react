import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1-74yk_y.css';
import '../../css/u/uf53hcsyv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1-74yk_y"/><path class="uf53hcsyv"/>`,
		"fallback": "garden:exit-fill-12",
	});
}

export default Component;
