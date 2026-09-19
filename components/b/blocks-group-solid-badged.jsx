import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqn522bqp.css';
import '../../css/j/jk-9pabkk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged tqn522bqp"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-2--badged jk-9pabkk"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:blocks-group-solid-badged",
	});
}

export default Component;
