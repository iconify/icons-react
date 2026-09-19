import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbqdbrx2k.css';
import '../../css/b/blyza-nqz.css';
import '../../css/u/uj15wsh5f.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 sbqdbrx2k"/><path class="blyza-nqz clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 uj15wsh5f"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:data-cluster-solid",
	});
}

export default Component;
