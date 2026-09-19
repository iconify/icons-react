import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-hcagb7y.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-hcagb7y"/>`,
		"fallback": "fluent-mdl2:drop-shape-solid",
	});
}

export default Component;
