import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnoobir0b.css';
import '../../css/k/k1rtsjb1d.css';
import '../../css/g/gwxpnyiic.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged dnoobir0b"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged k1rtsjb1d"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged gwxpnyiic"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:export-outline-badged",
	});
}

export default Component;
