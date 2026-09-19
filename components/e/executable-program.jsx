import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht1gmy20s.css';
import '../../css/d/d_j9e2b0e.css';
import '../../css/e/eqzj32bze.css';
import '../../css/b/bgok00bat.css';
import '../../css/z/z7x3snbvd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht1gmy20s"/><path class="d_j9e2b0e"/><circle class="eqzj32bze"/><circle class="bgok00bat"/><path class="z7x3snbvd"/>`,
		"fallback": "carbon:executable-program",
	});
}

export default Component;
