import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6s896bnq.css';
import '../../css/b/bur656b8s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6s896bnq"/><path class="bur656b8s"/>`,
		"fallback": "teenyicons:button-solid",
	});
}

export default Component;
