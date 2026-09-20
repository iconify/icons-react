import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txy8rw54j.css';
import '../../css/z/z5lhjcu0t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txy8rw54j"/><path clip-rule="evenodd" class="z5lhjcu0t"/>`,
		"fallback": "teenyicons:folder-no-access-solid",
	});
}

export default Component;
