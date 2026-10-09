import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cplwbao.css';
import '../../css/d/diot1q9qf.css';
import '../../css/a/as9ixf4ib.css';
import '../../css/z/zz39v3ury.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9cplwbao"/><path class="diot1q9qf"/><path class="as9ixf4ib"/><path class="zz39v3ury"/>`,
		"fallback": "energy-icons:bird-safe-20-bold",
	});
}

export default Component;
