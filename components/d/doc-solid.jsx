import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppq-09n2f.css';
import '../../css/l/l72h1vbkf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppq-09n2f"/><path clip-rule="evenodd" class="l72h1vbkf"/>`,
		"fallback": "teenyicons:doc-solid",
	});
}

export default Component;
