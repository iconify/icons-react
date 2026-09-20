import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whfl3kb-r.css';
import '../../css/l/laz58e6cn.css';
import '../../css/j/jmtoiebca.css';
import '../../css/s/so4w25-jt.css';

const viewBox = {"width":499.3,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="whfl3kb-r"/><path class="laz58e6cn"/><path clip-rule="evenodd" class="jmtoiebca"/><path clip-rule="evenodd" class="so4w25-jt"/>`,
		"fallback": "thesvg-color:austrian-airlines",
	});
}

export default Component;
