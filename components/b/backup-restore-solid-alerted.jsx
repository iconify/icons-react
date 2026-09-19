import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi3ijvhgu.css';
import '../../css/t/tv4fd-brp.css';
import '../../css/g/giczhqb6w.css';
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
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted xi3ijvhgu"/><path class="clr-i-solid--alerted clr-i-solid-path-2--alerted tv4fd-brp"/><path class="clr-i-solid--alerted clr-i-solid-path-3--alerted giczhqb6w"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-4--alerted switkv-0r"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:backup-restore-solid-alerted",
	});
}

export default Component;
