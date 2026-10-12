import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk0dd254b.css';
import '../../css/z/zdl0wqb1j.css';
import '../../css/k/kb4_zz_8t.css';
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
		"content": `<path class="dk0dd254b"/><path class="zdl0wqb1j"/><path class="kb4_zz_8t"/><path class="aqsnv9bnd"/><path class="xwdhawfba"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:database-plus-20-bold",
	});
}

export default Component;
