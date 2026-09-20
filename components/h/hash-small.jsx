import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/n/nzfymf.css';
import '../../css/a/alzt6g.css';
import '../../css/i/if4wba.css';
import '../../css/q/qfm0ur.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c nzfymf"/><path class="a0m25c alzt6g"/><path class="a0m25c if4wba"/><path class="a0m25c qfm0ur"/>`,
		"fallback": "line-md:hash-small",
	});
}

export default Component;
