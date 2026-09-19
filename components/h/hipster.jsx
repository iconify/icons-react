import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z06qeb-_f.css';
import '../../css/e/eiabxs9ve.css';
import '../../css/j/jel9531ah.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z06qeb-_f"/><path class="eiabxs9ve"/><path class="jel9531ah"/>`,
		"fallback": "icomoon-free:hipster",
	});
}

export default Component;
