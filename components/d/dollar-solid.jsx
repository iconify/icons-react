import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1flr7boj.css';
import '../../css/r/rtokti3yj.css';
import '../../css/l/lgf9ojfoo.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 u1flr7boj"/><path class="clr-i-solid clr-i-solid-path-2 rtokti3yj"/><path class="clr-i-solid clr-i-solid-path-3 lgf9ojfoo"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:dollar-solid",
	});
}

export default Component;
