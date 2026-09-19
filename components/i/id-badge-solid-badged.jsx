import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxl-uqb-c.css';
import '../../css/g/g5vhpfb4s.css';
import '../../css/e/ezxbjlbqv.css';
import '../../css/c/cz_ua42vu.css';
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
		"content": `<circle class="clr-i-solid--badged clr-i-solid-path-1--badged dxl-uqb-c"/><path class="clr-i-solid--badged clr-i-solid-path-2--badged g5vhpfb4s"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged ezxbjlbqv"/><path class="clr-i-solid--badged clr-i-solid-path-4--badged cz_ua42vu"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:id-badge-solid-badged",
	});
}

export default Component;
