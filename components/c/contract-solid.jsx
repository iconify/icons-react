import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv0ihtbqe.css';
import '../../css/p/p06tfrbog.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv0ihtbqe"/><path clip-rule="evenodd" class="p06tfrbog"/>`,
		"fallback": "teenyicons:contract-solid",
	});
}

export default Component;
