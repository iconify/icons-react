import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi3ijvhgu.css';
import '../../css/a/akr8yvc8u.css';
import '../../css/m/mpbni92dn.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged xi3ijvhgu"/><path class="akr8yvc8u clr-i-solid--badged clr-i-solid-path-2--badged"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged mpbni92dn"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:backup-restore-solid-badged",
	});
}

export default Component;
