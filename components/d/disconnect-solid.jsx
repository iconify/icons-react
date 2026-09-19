import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orp_ksb2f.css';
import '../../css/b/bt4q5sbjw.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 orp_ksb2f"/><path class="bt4q5sbjw clr-i-solid clr-i-solid-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:disconnect-solid",
	});
}

export default Component;
