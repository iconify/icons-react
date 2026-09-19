import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5jtwubqk.css';
import '../../css/l/l4h6u_9hi.css';
import '../../css/m/msalx2-zc.css';
import '../../css/j/j2vrv_58k.css';
import '../../css/j/jw4b9ebjq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 g5jtwubqk"/><path class="clr-i-solid clr-i-solid-path-2 l4h6u_9hi"/><path class="clr-i-solid clr-i-solid-path-3 msalx2-zc"/><path class="clr-i-solid clr-i-solid-path-4 j2vrv_58k"/><path class="clr-i-solid clr-i-solid-path-5 jw4b9ebjq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bicycle-solid",
	});
}

export default Component;
