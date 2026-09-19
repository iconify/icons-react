import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkk204bxw.css';
import '../../css/z/zzod9wung.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 xkk204bxw"/><path class="clr-i-solid clr-i-solid-path-2 zzod9wung"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:building-solid",
	});
}

export default Component;
