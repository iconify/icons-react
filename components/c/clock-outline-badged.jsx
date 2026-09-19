import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy2utibri.css';
import '../../css/e/eajk65b4i.css';
import '../../css/i/i3i9c4uvz.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged jy2utibri"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged eajk65b4i"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged i3i9c4uvz"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:clock-outline-badged",
	});
}

export default Component;
