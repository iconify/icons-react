import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swnh3d4fc.css';
import '../../css/t/t1v5m3rvb.css';
import '../../css/z/zewfsmbpj.css';
import '../../css/s/switkv-0r.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--alerted clr-i-outline-path-1--alerted swnh3d4fc"/><path class="clr-i-outline--alerted clr-i-outline-path-2--alerted t1v5m3rvb"/><path class="clr-i-outline--alerted clr-i-outline-path-3--alerted zewfsmbpj"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:hard-disk-outline-alerted",
	});
}

export default Component;
