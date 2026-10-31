import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpfeuxjdz.css';
import '../../css/i/ipm_ztc1f.css';
import '../../css/o/o5ajpab6k.css';
import '../../css/k/kf6wa5b6m.css';
import '../../css/h/hcdcwlgkp.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpfeuxjdz"/><path class="ipm_ztc1f"/><path class="o5ajpab6k"/><path class="kf6wa5b6m"/><path class="hcdcwlgkp"/>`,
		"fallback": "tabler-flags:heard-and-mcdonald-islands",
	});
}

export default Component;
