import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g96mkg.css';
import '../../css/q/qa-o7h.css';
import '../../css/x/xg8q_k.css';
import '../../css/x/xus5wf.css';
import '../../css/t/taf2xz.css';
import '../../css/x/x3g9vp.css';
import '../../css/y/yjdnsn.css';
import '../../css/h/h62ugr.css';
import '../../css/s/so-from-24.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g96mkg qa-o7h"/><path class="qa-o7h xg8q_k"/><path class="qa-o7h xus5wf"/><path class="qa-o7h taf2xz x3g9vp"/><path class="qa-o7h taf2xz yjdnsn"/><path class="h62ugr qa-o7h taf2xz"/>`,
		"fallback": "line-md:check-list-3",
	});
}

export default Component;
