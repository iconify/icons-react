import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzblojbha.css';
import '../../css/o/ogyy_o36n.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 zzblojbha"/><path class="clr-i-solid clr-i-solid-path-2 ogyy_o36n"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:connect-solid",
	});
}

export default Component;
