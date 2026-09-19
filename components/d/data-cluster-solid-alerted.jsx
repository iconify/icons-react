import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blyza-nqz.css';
import '../../css/j/jmt_dvbzx.css';
import '../../css/t/tcqqnmbon.css';
import '../../css/w/w76oxubbv.css';
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
		"content": `<path class="blyza-nqz clr-i-solid--alerted clr-i-solid-path-1--alerted"/><path class="clr-i-solid--alerted clr-i-solid-path-2--alerted jmt_dvbzx"/><path class="clr-i-solid--alerted clr-i-solid-path-3--alerted tcqqnmbon"/><path class="clr-i-solid--alerted clr-i-solid-path-4--alerted w76oxubbv"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-5--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:data-cluster-solid-alerted",
	});
}

export default Component;
