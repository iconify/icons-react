import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf9v9teof.css';
import '../../css/z/zaydmwbwh.css';
import '../../css/h/h4j_dabil.css';
import '../../css/q/qs7ewvbqh.css';
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
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged lf9v9teof"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged zaydmwbwh"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged h4j_dabil"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged qs7ewvbqh"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:backup-restore-outline-badged",
	});
}

export default Component;
