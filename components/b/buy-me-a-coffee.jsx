import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nus6ba.css';
import '../../css/j/jcq1ao.css';
import '../../css/a/a0m25c.css';
import '../../css/u/uu-53j.css';
import '../../css/z/zl4c-b.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-4-9ugh.css';
import '../../css/d/d-n8ltvl.css';
import '../../css/s/so-from-32.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQjhHvebl"><path class="nus6ba"/><path class="jcq1ao"/></mask></defs><path class="a0m25c uu-53j"/><path class="a0m25c zl4c-b"/><path mask="url(#SVGQjhHvebl)" class="botfzx"/>`,
		"fallback": "line-md:buy-me-a-coffee",
	});
}

export default Component;
