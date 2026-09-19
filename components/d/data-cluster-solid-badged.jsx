import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blyza-nqz.css';
import '../../css/u/uj15wsh5f.css';
import '../../css/c/ck5nmbc3j.css';
import '../../css/q/q8k-t9rkd.css';
import '../../css/y/ymyjd4bhz.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blyza-nqz clr-i-solid--badged clr-i-solid-path-1--badged"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged uj15wsh5f"/><path class="ck5nmbc3j clr-i-solid--badged clr-i-solid-path-3--badged"/><path class="clr-i-solid--badged clr-i-solid-path-4--badged q8k-t9rkd"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-5--badged ymyjd4bhz"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:data-cluster-solid-badged",
	});
}

export default Component;
