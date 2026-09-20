import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/w/wc7n7b.css';
import '../../css/e/ecu16w.css';
import '../../css/f/fequ5n.css';
import '../../css/s/so-to-12.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-o7h taf2xz wc7n7b"/><path class="ecu16w qa-o7h"/><path class="fequ5n qa-o7h taf2xz"/>`,
		"fallback": "line-md:clipboard-check-to-clipboard-transition",
	});
}

export default Component;
