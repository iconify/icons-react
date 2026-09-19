import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2g0gnbvv.css';
import '../../css/e/ex8q-3b0r.css';
import '../../css/n/nnce3qmjt.css';
import '../../css/n/n8anfccmt.css';
import '../../css/m/m9g8g4cpb.css';
import '../../css/u/u7cnuzgvx.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 g2g0gnbvv"/><path class="clr-i-solid clr-i-solid-path-2 ex8q-3b0r"/><path class="clr-i-solid clr-i-solid-path-3 nnce3qmjt"/><path class="clr-i-solid clr-i-solid-path-4 n8anfccmt"/><circle class="clr-i-solid clr-i-solid-path-5 m9g8g4cpb"/><path class="clr-i-solid clr-i-solid-path-6 u7cnuzgvx"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:group-solid",
	});
}

export default Component;
