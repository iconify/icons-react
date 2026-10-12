import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhuzgciui.css';
import '../../css/s/s-e7f6v_f.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/x/xwdhawfba.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhuzgciui"/><path class="s-e7f6v_f"/><path class="aqsnv9bnd"/><path class="xwdhawfba"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:camera-plus-20-bold",
	});
}

export default Component;
