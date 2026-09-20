import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efk5cf.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/d/dnm6ad.css';
import '../../css/h/h_evql.css';
import '../../css/z/z0edao.css';
import '../../css/u/uu-jvr.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efk5cf qa-o7h taf2xz"/><path class="dnm6ad qa-o7h taf2xz"/><path class="h_evql qa-o7h"/><path class="qa-o7h taf2xz z0edao"/><path class="qa-o7h taf2xz uu-jvr"/>`,
		"fallback": "line-md:clipboard-arrow",
	});
}

export default Component;
