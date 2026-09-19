import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8i80_bea.css';
import '../../css/g/gk9a1dbdu.css';
import '../../css/b/by9xqe3-e.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged p8i80_bea"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged gk9a1dbdu"/><path class="by9xqe3-e clr-i-solid--badged clr-i-solid-path-3--badged"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:computer-solid-badged",
	});
}

export default Component;
