import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi--jy2wc.css';
import '../../css/s/srhtu563i.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 qi--jy2wc"/><path class="clr-i-solid clr-i-solid-path-2 srhtu563i"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:eraser-solid",
	});
}

export default Component;
