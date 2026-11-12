import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywvh2o5os.css';
import '../../css/h/h8b9m8b5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywvh2o5os"/><path class="h8b9m8b5f"/>`,
		"fallback": "selfhst:composetoolbox",
	});
}

export default Component;
